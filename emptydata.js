export const githubUsername = ""; // Your GitHub username

// Personal Information
export const Name = ""; // Your first name
export const LastName = ""; // Your last name
export const FullName = `${Name} ${LastName}`; // Concatenation of your first and last name
export const mail = ""; // Your email address

// Meta information
export const metaTitle = ""; // The title of your portfolio site
export const metaDescription = ""; // A brief description of your portfolio
export const metaKeywords = ""; // Keywords for SEO, e.g., "your name, your profession, skills"
export const metaAuthor = ""; // Your name as the author of the site

// Contact information
export const contactInfo = `I'm just an email or a message away on any platform. Send me an email at ${mail}, or find me on LinkedIn. Let’s start a conversation about your ideas or just enjoy a casual chat.`; // Contact information template with your email

// Bio
export const bio = [
    "Short introduction about who you are.",
    `A brief overview of your professional background, mentioning your field of expertise.`,
    `Details about your skills and experience, focusing on what makes you unique.`,
    `Your passion and goals, highlighting your motivation and what drives you.`,
    "A closing statement, inviting visitors to explore your portfolio further."
];

// Languages
export const languages = [
    {
        title: "Language proficiency title, e.g., 'Native Spanish Speaker'",
        skillName: "Language name, e.g., 'Spanish'",
        color: "Color code or name for the skill bar, e.g., '1'",
        percentage: "Proficiency percentage, e.g., '100'",
    },
    {
        title: "Language proficiency title, e.g., 'Fluent in English'",
        skillName: "Language name, e.g., 'English'",
        color: "Color code or name for the skill bar, e.g., '2'",
        percentage: "Proficiency percentage, e.g., '85'",
    }
];

// Skills
export const skills = {
    "Programming and Scripting Languages": [
        {
            "skillName": "Name of a programming language, e.g., 'Java'",
            "imagePath": "Path to the language's logo image, e.g., 'images/skills/java_logo.png'",
        }
    ],
    "Database Management Systems": [
        {
            "skillName": "Name of the DBMS, e.g., 'Oracle Database'",
            "imagePath": "Path to the DBMS logo, e.g., 'images/skills/oracle_db_logo.png'",
            "description": "Brief description of your experience with this DBMS, e.g., 'Managing and administering Oracle databases.'"
        }
    ],
    "Testing and Automation Tools": [
        {
            "skillName": "Name of the tool, e.g., 'Selenium'",
            "imagePath": "Path to the tool's logo, e.g., 'images/skills/selenium_logo.png'",
            "description": "Brief description of your experience with this tool, e.g., 'Automating web browser tests using Selenium.'"
        }
    ],
    "Version Control and CI/CD Tools": [
        {
            "skillName": "Name of the tool, e.g., 'Git'",
            "imagePath": "Path to the tool's logo, e.g., 'images/skills/git_logo.png'",
            "description": "Brief description of your experience with this tool, e.g., 'Using Git for version control during software development.'"
        }
    ]
};

// Certifications
export const certifications = {
    LinkedInLearning: [
        {
            certificationName: "Name of the certification, e.g., 'Learning Python'",
            image: "Path to the certification image, e.g., 'images/Certifications/LinkedInLearning/CertificateOfCompletion_Learning_Python.jpg'",
            preview: "URL to preview the certification image, e.g., 'http://example.com/certificate.jpg'"
        }
    ],
    technicalCertifications: [
        {
            certificationName: "Name of the certification, e.g., 'ISTQB Foundation Level'",
            image: "Path to the certification image, e.g., 'images/Certifications/ISTQB/ISTQB_Foundation_Level.jpg'",
            preview: "URL to preview the certification image, e.g., 'http://example.com/certificate.jpg'"
        }
    ]
};

// Experience
export const experience = [
    {
        title: "Job Title, e.g., 'Software Engineer'",
        subtitle: "Company Name",
        duration: "Duration, e.g., '2020 - Present'",
        details: [
            "Key responsibility or achievement, e.g., 'Developed and maintained web applications.'",
            "Key responsibility or achievement, e.g., 'Led a team of developers to deliver projects on time.'",
            "Key responsibility or achievement, e.g., 'Implemented CI/CD pipelines to automate workflows.'"
        ],
        tags: ["Relevant", "Tags", "For", "The", "Role"],
        icon: "Icon name, e.g., 'briefcase'",
    }
];

// Education
export const education = [
    {
        title: "Degree or Certification, e.g., 'Master’s in Computer Science'",
        duration: "Duration, e.g., '2018 - 2020'",
        subtitle: "Institution Name, e.g., 'University of XYZ'",
        details: [
            "Thesis topic or key course, e.g., 'Thesis on machine learning algorithms.'"
        ],
        tags: ["Relevant", "Tags", "For", "The", "Degree"],
        icon: "Icon name, e.g., 'graduation-cap'",
    }
];

// Testimonials
export const testimonials = {
    reviewer: "Reviewer’s Name",
    period: "Time period of the testimonial, e.g., 'Various Positions'",
    company: "Company Name",
    feedback: [
        {
            title: "Aspect of the feedback, e.g., 'Technical Expertise'",
            detail: "Detailed feedback, e.g., 'The individual demonstrates profound knowledge in their field.'"
        }
    ]
};

// Footer
export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Profile name, e.g., 'GitHub'",
                link: "URL to the profile, e.g., 'https://github.com/yourusername'",
            }
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Resource description, e.g., 'Send me a mail'",
                link: `mailto:${mail}`,
            },
            {
                text: "Resource description, e.g., 'Download Resume'",
                link: "URL to the resume, e.g., 'assets/Your_Resume.pdf'",
                target: "_blank"
            }
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Social profile name, e.g., 'LinkedIn'",
                link: "URL to the social profile, e.g., 'https://www.linkedin.com/in/yourprofile'",
            }
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Custom message, e.g., 'Made with &hearts; by YourName.'",
            "Custom message, e.g., '&copy; No Copyrights. Feel free to use this template.'",
        ],
    },
];
