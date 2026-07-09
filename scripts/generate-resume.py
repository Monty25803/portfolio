"""Generate resume PDF with Medall project included."""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib import colors

OUTPUT = "public/resume.pdf"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontSize=16, leading=18, spaceAfter=4, fontName="Helvetica-Bold"))
styles.add(ParagraphStyle(name="Subtitle", fontSize=9, leading=11, spaceAfter=6, textColor=colors.HexColor("#333333")))
styles.add(ParagraphStyle(name="Contact", fontSize=8.5, leading=10, spaceAfter=10))
styles.add(ParagraphStyle(name="Section", fontSize=10, leading=12, spaceBefore=8, spaceAfter=4, fontName="Helvetica-Bold"))
styles.add(ParagraphStyle(name="Body", fontSize=9, leading=12, spaceAfter=6))
styles.add(ParagraphStyle(name="JobTitle", fontSize=9.5, leading=12, spaceBefore=6, spaceAfter=2, fontName="Helvetica-Bold"))
styles.add(ParagraphStyle(name="JobMeta", fontSize=8.5, leading=10, spaceAfter=4, textColor=colors.HexColor("#444444")))
styles.add(ParagraphStyle(name="ResumeBullet", fontSize=9, leading=12, leftIndent=12, spaceAfter=3, bulletIndent=0))


def bullet(text):
    return Paragraph(f"• {text}", styles["ResumeBullet"])


def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
    )
    story = []

    story.append(Paragraph("Devi Prasana Mishra", styles["Name"]))
    story.append(
        Paragraph(
            "Software Developer &nbsp;|&nbsp; Python &nbsp;|&nbsp; Django &nbsp;|&nbsp; Angular &nbsp;|&nbsp; MySQL &nbsp;|&nbsp; AWS S3 &nbsp;|&nbsp; Backend Systems",
            styles["Subtitle"],
        )
    )
    story.append(
        Paragraph(
            "Phone: +91-8763243097 &nbsp;|&nbsp; Email: deviprasan25803@gmail.com &nbsp;|&nbsp; "
            "LinkedIn: linkedin.com/in/devi-prasana-mishra-606064bb",
            styles["Contact"],
        )
    )
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cccccc")))
    story.append(Spacer(1, 4))

    story.append(Paragraph("PROFESSIONAL SUMMARY", styles["Section"]))
    story.append(
        Paragraph(
            "Software Developer with 2+ years of experience building scalable backend systems using Python and Django "
            "for healthcare, inventory management, client onboarding, and financial reporting. Proficient in MySQL and "
            "PostgreSQL database design, AWS S3 cloud integration, REST API development, Angular dashboards, and "
            "agentic AI-assisted development. Experienced delivering enterprise-grade solutions at PDCloudEx for "
            "Metropolis Healthcare and Medall Corp. Demonstrated ability to reduce operational inefficiencies, automate "
            "data pipelines, and implement role-based access control (RBAC) systems.",
            styles["Body"],
        )
    )

    story.append(Paragraph("TECHNICAL SKILLS", styles["Section"]))
    skills = [
        "<b>Programming Languages:</b> Python, SQL, JavaScript",
        "<b>Frameworks & Libraries:</b> Django, Django REST Framework, Angular, REST API Development",
        "<b>Databases:</b> MySQL, PostgreSQL, Database Design, Query Performance Tuning",
        "<b>Cloud & DevOps:</b> AWS S3, Cloud Storage Integration, Secure File Handling",
        "<b>Security:</b> Role-Based Access Control (RBAC), Authentication & Authorization",
        "<b>Domain Expertise:</b> Healthcare IT, SCM, Client Onboarding, Inventory Management, Financial Reporting",
        "<b>Tools & Practices:</b> Agentic AI, Workflow Automation, Agile Methodology, Git",
    ]
    for s in skills:
        story.append(Paragraph(s, styles["Body"]))

    story.append(Paragraph("PROFESSIONAL EXPERIENCE", styles["Section"]))

    story.append(
        Paragraph(
            "Software Developer — Medall Client Channel Onboarding (Medall Corp) &nbsp;|&nbsp; PDCloudEx, Remote",
            styles["JobTitle"],
        )
    )
    story.append(Paragraph("June 2026 — July 2026", styles["JobMeta"]))
    medall_bullets = [
        "Developed the Medall Client Channel Onboarding platform — Angular dashboard with Django REST APIs for partner and client channel registration at onboard.medallcorp.in.",
        "Implemented multi-step onboarding workflows with validation, approval flows, and real-time status tracking for onboarding requests.",
        "Built role-based access control for channel partners and admins with audit trail for onboarding actions.",
        "Integrated onboarding logic with Medall Corp business rules and access policies; deployed production platform using agentic AI-assisted development.",
    ]
    for b in medall_bullets:
        story.append(bullet(b))

    story.append(
        Paragraph(
            "Software Developer — Stock Management System (Metropolis Healthcare) &nbsp;|&nbsp; PDCloudEx, Remote",
            styles["JobTitle"],
        )
    )
    story.append(Paragraph("May 2024 — Present", styles["JobMeta"]))
    stock_bullets = [
        "Architected Python/Django backend logic for a multi-hub real-time stock management system, enabling live inventory tracking across 10+ laboratory hubs and reducing stock discrepancies by 30%.",
        "Optimized daily consumption tracking workflows and improved inventory visibility across a multi-tier laboratory network, supporting operations teams in monitoring stock movement across 5+ facility levels.",
        "Developed and executed complex MySQL scripts to aggregate sub-project stock values into a consolidated master budget, eliminating manual reconciliation and improving financial calculation accuracy.",
        "Implemented barcode scanning integration and automated consumption-tracking workflows, reducing manual stock entry dependency by 40%.",
        "Led end-to-end resource activation deployment for 15+ new laboratory centers, automating synchronization with the central inventory database within 24 hours of center onboarding.",
    ]
    for b in stock_bullets:
        story.append(bullet(b))

    story.append(
        Paragraph(
            "Software Developer — Test Code Costing Module (Metropolis Healthcare) &nbsp;|&nbsp; PDCloudEx, Remote",
            styles["JobTitle"],
        )
    )
    story.append(Paragraph("December 2023 — May 2024", styles["JobMeta"]))
    costing_bullets = [
        "Integrated AWS S3 for secure, scalable cloud storage of monthly diagnostic datasets, enabling automated upload and retrieval workflows for 35+ laboratory hubs and reducing data retrieval time by 50%.",
        "Built Python automation scripts to ingest and process 35+ monthly Excel files from laboratory hubs, cutting manual data consolidation effort by 60%.",
        "Developed staff management and user authentication system with role-based access control (RBAC), enforcing data security across 3 distinct permission levels.",
        "Implemented month-wise financial calculation backend logic, transforming raw diagnostic data into structured financial reports.",
        "Engineered upload activity tracking and audit reporting features, improving compliance visibility across all user submissions.",
    ]
    for b in costing_bullets:
        story.append(bullet(b))

    story.append(Paragraph("EDUCATION", styles["Section"]))
    story.append(
        Paragraph(
            "<b>Bachelor of Technology (B.Tech) — Information Technology</b> &nbsp; Aug 2019 — Apr 2022<br/>"
            "Veer Surendra Sai University of Technology (VSSUT), Burla, Odisha",
            styles["Body"],
        )
    )
    story.append(
        Paragraph(
            "<b>Diploma — Information Technology</b> &nbsp; Aug 2016 — May 2019<br/>"
            "Uma Charan Pattnaik Engineering School",
            styles["Body"],
        )
    )

    story.append(Paragraph("CERTIFICATIONS", styles["Section"]))
    certs = [
        "AWS Academy Graduate — AWS Academy Cloud Foundations (Amazon Web Services)",
        "NDG Linux Unhatched — Cisco Networking Academy",
        "Python Programming — Complete Beginners Course Bootcamp 2022",
        "Complete Android Developer Course — Android 11 with Java",
        "Build Responsive Websites Using HTML5, CSS3, JavaScript and Bootstrap",
    ]
    for c in certs:
        story.append(bullet(c))

    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
