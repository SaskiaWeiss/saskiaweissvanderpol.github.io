import {
    bio,
    languages,
    projects,
    education,
    experience,
    footer,
} from "./data.js";

import { URLs } from './user-data/urls.js';

const { professionalCertifications, technicalCertifications, educationalCertifications, LinkedInLearning, Test_Automation_University_TAU } =
    projects;

const {gitConnected } = URLs;


async function fetchGitConnectedData(url) {
    try {
        const response = await fetch(url);
        const { basics } = await response.json();
        // populateBlogs(items, "blogs");
        mapBasicResponse(basics);
    } catch (error) {
        throw new Error(
            `Error in fetching the blogs from git connected: ${error}`
        );
    }
}

function mapBasicResponse(basics) {
    const {
        name,
        label,
        image,
        email,
        phone,
        url,
        summary,
        profiles,
        headline,
        blog,
        yearsOfExperience,
        username,
        locationAsString,
        region,
        karma,
        id,
        followers,
        following,
        picture,
        website
    } = basics;

    // added title of page
    window.parent.document.title = name;
}
/**
 * Creates an HTML element with optional class, text, attributes, and children.
 * @param {string} type - The type of the HTML element to create.
 * @param {string|null} className - Optional. The class name of the element.
 * @param {string|null} text - Optional. Text content of the element.
 * @param {Object|null} attributes - Optional. Attributes to set on the element.
 * @param {Array|null} children - Optional. Child elements to append to the created element.
 * @returns {Element} The newly created element.
 */
function createAndSetupElement(type, className = null, text = null, attributes = {}, children = []) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (text) element.textContent = text;
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    children.forEach(child => {
        element.appendChild(child);
    });
    return element;
}

/**
 * Appends multiple child elements to a parent element.
 * @param {languages} parent - The parent element.
 * @param {...languages} children - Child elements to append to the parent.
 */
function appendChildren(parent, ...children) {
    children.forEach(child => parent.appendChild(child));
}

function populateBio(items, id) {
    const bioTag = document.getElementById(id);
    items.forEach(bioItem => {
        const p = createAndSetupElement('p', null, bioItem);
        bioTag.appendChild(p);
    });
}

function populateSkills(items, id) {
    const skillsTag = document.getElementById(id);
    items.forEach(({ skillName, color, percentage }) => {
        const skillElement = createAndSetupElement('div', 'col-md-6 animate-box');
        const progressWrap = createAndSetupElement('div', 'progress-wrap');
        const h3 = createAndSetupElement('h3', null, skillName);
        const progress = createAndSetupElement('div', 'progress');
        const progressBar = createAndSetupElement('div', `progress-bar color-${color}`, null, {
            style: `width: ${percentage}%`
        });

        appendChildren(progress, progressBar);
        appendChildren(progressWrap, h3, progress);
        appendChildren(skillElement, progressWrap);
        skillsTag.appendChild(skillElement);
    });
}

function populateProjects(items, id) {
    const projectContainer = document.getElementById(id);
    items.forEach(item => {
        const projectCard = createAndSetupElement('div', 'project-card');
        const link = createAndSetupElement('a', null, null, { href: item.preview, target: '_blank' });
        const resumeItem = createAndSetupElement('div', 'resume-item');
        const leftDiv = createAndSetupElement('div', 'resume-content', null, { id: 'left-div' });
        const img = createAndSetupElement('img', 'img-fluid', null, { src: item.image });
        const rightDiv = createAndSetupElement('div', 'resume-content', null, { id: 'right-div' });
        const certificationHeading = createAndSetupElement('h4', 'certifications-heading', item.certificationName);

        appendChildren(leftDiv, img);
        appendChildren(rightDiv, certificationHeading);
        appendChildren(resumeItem, leftDiv, rightDiv);
        appendChildren(link, resumeItem);
        appendChildren(projectCard, link);
        projectContainer.appendChild(projectCard);
    });
}

function populateExp_Edu(items, id) {
    const mainContainer = document.getElementById(id);
    items.forEach(item => {
        const icon = createAndSetupElement('i', `fa fa-${item.icon}`);
        const timelineIcon = createAndSetupElement('div', 'timeline-icon color-2', null, {}, [icon]);
        const label = createAndSetupElement('div', 'timeline-label');
        const title = createAndSetupElement('h2', null, item.title);
        const subtitle = createAndSetupElement('span', 'timeline-sublabel', item.subtitle);
        const duration = createAndSetupElement('span', null, item.duration);

        title.appendChild(duration);
        label.append(title, subtitle);
        item.details.forEach(detail => {
            const detailP = createAndSetupElement('p', 'timeline-text', `&blacksquare; ${detail}`);
            label.appendChild(detailP);
        });

        const tagsDiv = createAndSetupElement('div');
        item.tags.forEach(tag => {
            const tagSpan = createAndSetupElement('span', 'badge badge-secondary', tag);
            tagsDiv.appendChild(tagSpan);
        });

        label.appendChild(tagsDiv);
        const inner = createAndSetupElement('div', 'timeline-entry-inner', null, {}, [timelineIcon, label]);
        const article = createAndSetupElement('article', 'timeline-entry animate-box', null, {}, [inner]);
        mainContainer.appendChild(article);
    });

    // Create the initial timeline entry
    const startIcon = createAndSetupElement('div', 'timeline-icon color-2');
    const startInner = createAndSetupElement('div', 'timeline-entry-inner', null, {}, [startIcon]);
    const startArticle = createAndSetupElement('article', 'timeline-entry begin animate-box', null, {}, [startInner]);
    mainContainer.appendChild(startArticle);
}


/**
 * Populate links in the specified footer section with provided data.
 *
 * @param {Array} items - Array of objects containing data for links
 * @param {String} id - Id of the footer section in which the links will be populated
 */
function populateLinks(items, id) {
    const footer = document.getElementById(id);

    items.forEach(item => {
        if (item.label !== "copyright-text") {
            const colSpan = createAndSetupElement('span', 'col');
            const colTitle = createAndSetupElement('p', 'col-title', item.label);
            const nav = createAndSetupElement('nav', 'col-list');
            const ul = createAndSetupElement('ul');

            item.data.forEach(data => {
                const li = createAndSetupElement('li');
                const a = createAndSetupElement('a', null, data.text, {
                    href: data.link ? data.link : '#',
                    target: data.link ? '_blank' : undefined,
                    onclick: data.func ? data.func : undefined
                });

                li.appendChild(a);
                ul.appendChild(li);
            });

            nav.appendChild(ul);
            appendChildren(colSpan, colTitle, nav);
            footer.appendChild(colSpan);
        } else {
            // Handle copyright text separately
            const copyrightDiv = createAndSetupElement('div', 'copyright-text no-print');
            item.data.forEach(copyItem => {
                const p = createAndSetupElement('p', null, copyItem);
                copyrightDiv.appendChild(p);
            });
            footer.appendChild(copyrightDiv);
        }
    });
}


populateBio(bio, "bio");

populateSkills(languages, "languages");

fetchGitConnectedData(gitConnected);

populateProjects(Test_Automation_University_TAU, "TAU");
populateProjects(LinkedInLearning, "LinkedInLearning");
populateProjects(technicalCertifications, "technical-certifications");
populateProjects(educationalCertifications, "professional-certifications");

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

populateLinks(footer, "footer");
