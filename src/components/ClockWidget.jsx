import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const HOME = profile.homeAirport ?? { code: "BBI", tz: "Asia/Kolkata" };

function useClockTime(tz) {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [tz]);

  return time;
}

function ClockRow({ code, tz }) {
  const time = useClockTime(tz);
  return (
    <div className="clock-row">
      <span className="clock-pin" aria-hidden>◎</span>
      <span className="clock-code">{code}</span>
      <span className="clock-time">{time}</span>
    </div>
  );
}

export default function ClockWidget() {
  const [visitor, setVisitor] = useState(null);

  useEffect(() => {
    const fallback = () => {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setVisitor({ code: "···", tz });
    };

    if (!navigator.geolocation) {
      fallback();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setVisitor({ code: "···", tz });
      },
      fallback,
      { timeout: 5000, maximumAge: 300000 }
    );
  }, []);

  const visitorTz = visitor?.tz ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const visitorCode = visitor?.code ?? "···";
  const sameHome = visitorCode === HOME.code;

  return (
    <div className="clock-widget" aria-label="Local time">
      <ClockRow code={HOME.code} tz={HOME.tz} />
      {!sameHome && visitor && <ClockRow code={visitorCode} tz={visitorTz} />}
    </div>
  );
}
