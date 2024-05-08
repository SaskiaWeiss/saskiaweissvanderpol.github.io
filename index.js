import { bio, languages, certifications, education, experience, footer, skills, testimonials  } from "./data.js";
import { URLs } from './user-data/urls.js';

function mapBasicResponse(response) {
    const { basics } = response;
    const { name, label, image, email, phone } = basics;
    console.log(basics);
    window.parent.document.title = name;

    // Use other properties as needed
    // For example, you can add the label to the title
    if (label) {
        window.parent.document.title += ` - ${label}`;
    }

    // Or you can use the image, email, and phone in other parts of your code
    // ...
}
const { professionalCertifications, technicalCertifications, educationalCertifications, LinkedInLearning, Test_Automation_University_TAU } = certifications;
const { gitConnected } = URLs;
/**
 * A unified fetch function to handle all data retrieval needs.
 */
async function fetchData(url, handleData) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        handleData(data);
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

/**
 * Improved element creation function that can also attach events.
 */
function createElement(type, { className, text, attributes, events, children } = {}) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (text) element.textContent = text;
    Object.entries(attributes || {}).forEach(([key, value]) => element.setAttribute(key, value));
    Object.entries(events || {}).forEach(([event, handler]) => element.addEventListener(event, handler));
    (children || []).forEach(child => element.appendChild(createElement(...child)));
    return element;
}

/**
 * Function to handle generic container population.
 */
function populateContainer(containerId, items, createElementCallback) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`No container found with ID ${containerId}`);
        return;
    }
    container.innerHTML = ''; // Clear container
    items.forEach(item => container.appendChild(createElementCallback(item)));
}

/**
 * Example of a generic createElementCallback
 */
function createBioItem(item) {
    return createElement('p', { text: item });
}

/**
 * Creates a language skill element with a progress bar.
 * @param {Object} language - An object representing a language skill.
 * @returns {Element} - A DOM element representing the language skill.
 */
function createLanguageSkillElement(language) {
    const { skillName, color, percentage } = language;
    const skillContainer = createElement('div', {
        className: 'col-md-6 animate-box',
        children: [
            ['div', {
                className: 'progress-wrap',
                children: [
                    ['h3', { text: skillName }],
                    ['div', {
                        className: 'progress',
                        children: [
                            ['div', {
                                className: `progress-bar color-${color}`,
                                attributes: { style: `width: ${percentage}%` }
                            }]
                        ]
                    }]
                ]
            }]
        ]
    });
    return skillContainer;
}


function createSkillItem(skill) {
    const { skillName, imagePath, description } = skill;

    // Main list item container
    const listItem = document.createElement('li');
    listItem.className = 'skill-item';

    // Conditionally add an image if imagePath is provided
    if (imagePath) {
        const image = document.createElement('img');
        image.className = 'skill-logo';
        image.setAttribute('src', imagePath);
        image.setAttribute('alt', `Logo of ${skillName}`);
        image.setAttribute('loading', 'lazy');
        listItem.appendChild(image);
    }

    // Skill name element
    const skillNameSpan = document.createElement('span');
    skillNameSpan.className = 'skill-name';
    skillNameSpan.textContent = skillName;
    listItem.appendChild(skillNameSpan);

    // Skill description element
    const descriptionP = document.createElement('p');
    descriptionP.className = 'skill-description';
    descriptionP.textContent = description || '';  // Set to empty string if no description
    listItem.appendChild(descriptionP);

    return listItem;
}


function createCertificationItem(certification) {
    // Ensure certification is defined and provide default values for its properties to avoid errors
    const { 
        certificationName = '', 
        image = '', 
        preview = '#', 
        description = '' 
    } = certification || {};

    // Main container for the certification card
    const certificationCard = document.createElement('li');
    certificationCard.className = 'skill-item';

    // Link container, which also acts as the card clickable area
    const link = document.createElement('a');
    link.setAttribute('href', preview);
    link.setAttribute('target', '_blank');
    certificationCard.appendChild(link);

    // Optionally add image if it exists
    if (image) {
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.setAttribute('alt', `Image of ${certificationName}`);
        img.setAttribute('class', 'certification-img');
        img.setAttribute('loading', 'lazy');
        link.appendChild(img);
    }

    // Certification name
    const nameElement = document.createElement('h4');
    nameElement.textContent = certificationName;
    nameElement.className = 'skill-name';
    link.appendChild(nameElement);

    // Optional description
    if (description) {
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        link.appendChild(descriptionElement);
    }

    return certificationCard;
}


function createExperienceItem(experience) {
    const { title, subtitle, duration, details, tags, icon } = experience;

    // Main container for an experience entry
    const experienceEntry = document.createElement('article');
    experienceEntry.className = 'timeline-entry animate-box';

    // Inner structure for the timeline icon and label
    const timelineInner = document.createElement('div');
    timelineInner.className = 'timeline-entry-inner';

    const timelineIcon = document.createElement('div');
    timelineIcon.className = 'timeline-icon color-3';
    const iconElement = document.createElement('i');
    iconElement.className = `fa ${icon}`;
    timelineIcon.appendChild(iconElement);

    const timelineLabel = document.createElement('div');
    timelineLabel.className = 'timeline-label';

    // Use innerHTML to allow for HTML tags within strings
    const titleHTML = document.createElement('h2');
    titleHTML.innerHTML = `${title} <span class="timeline-sublabel">${subtitle}</span>`;
    timelineLabel.appendChild(titleHTML);

    const durationSpan = document.createElement('span');
    durationSpan.className = 'duration';
    durationSpan.textContent = duration;
    timelineLabel.appendChild(durationSpan);

    details.forEach(detail => {
        const detailParagraph = document.createElement('p');
        detailParagraph.className = 'timeline-text';
        detailParagraph.textContent = detail;
        timelineLabel.appendChild(detailParagraph);
    });

    const tagsDiv = document.createElement('div');
    tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'badge badge-secondary';
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
    });
    timelineLabel.appendChild(tagsDiv);

    timelineInner.appendChild(timelineIcon);
    timelineInner.appendChild(timelineLabel);
    experienceEntry.appendChild(timelineInner);

    return experienceEntry;
}


function createEducationItem(education) {
    const { title, subtitle, duration, details, tags, icon } = education;

    // Main container for an education entry
    const educationEntry = document.createElement('article');
    educationEntry.className = 'timeline-entry animate-box';

    // Inner structure for the timeline icon and label
    const timelineInner = document.createElement('div');
    timelineInner.className = 'timeline-entry-inner';

    const timelineIcon = document.createElement('div');
    timelineIcon.className = 'timeline-icon color-3'; // Assuming 'color-3' is a class for education icons
    const iconElement = document.createElement('i');
    iconElement.className = `fa ${icon}`;
    timelineIcon.appendChild(iconElement);

    const timelineLabel = document.createElement('div');
    timelineLabel.className = 'timeline-label';

    // Setting the title with the subtitle
    const titleHTML = document.createElement('h2');
    titleHTML.innerHTML = `${title} <span class="timeline-sublabel">${subtitle}</span>`;
    timelineLabel.appendChild(titleHTML);

    const durationSpan = document.createElement('span');
    durationSpan.className = 'duration';
    durationSpan.textContent = duration;
    timelineLabel.appendChild(durationSpan);

    details.forEach(detail => {
        const detailParagraph = document.createElement('p');
        detailParagraph.className = 'timeline-text';
        detailParagraph.textContent = `&blacksquare; ${detail}`;
        timelineLabel.appendChild(detailParagraph);
    });

    const tagsDiv = document.createElement('div');
    tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'badge badge-secondary';
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
    });
    timelineLabel.appendChild(tagsDiv);

    timelineInner.appendChild(timelineIcon);
    timelineInner.appendChild(timelineLabel);
    educationEntry.appendChild(timelineInner);

    return educationEntry;
}


/**
 * Creates an HTML element for a testimonial.
 * @param {Object} testimonial - An object containing the title and detail of a testimonial.
 * @returns {HTMLElement} - A DOM element representing the testimonial.
 */
function createTestimonialElement(testimonial, isActive) {
    const wrapper = document.createElement('div');
    wrapper.className = `carousel-item ${isActive ? 'active' : ''}`;

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'carousel-content';

    const title = document.createElement('h3');
    title.textContent = testimonial.title;
    title.className = 'testimonial-title';

    const detail = document.createElement('p');
    detail.textContent = testimonial.detail;
    detail.className = 'testimonial-detail';

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(detail);
    wrapper.appendChild(contentWrapper);

    return wrapper;
}



function createFooterItem(item) {
    const { label, data } = item;
    
    if (label === "copyright-text") {
        const copyrightDiv = document.createElement('div');
        data.forEach(text => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text; // Using innerHTML in case there are HTML entities
            copyrightDiv.appendChild(paragraph);
        });
        return copyrightDiv;
    } else {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';

        const colTitle = document.createElement('p');
        colTitle.className = 'col-title';
        colTitle.textContent = label;
        colDiv.appendChild(colTitle);

        const nav = document.createElement('nav');
        nav.className = 'col-list';
        const ul = document.createElement('ul');
        data.forEach(linkItem => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = linkItem.text;
            if (linkItem.link) {
                a.setAttribute('href', linkItem.link);
                if (linkItem.target) {
                    a.setAttribute('target', linkItem.target);
                }
            }
            if (linkItem.func) {
                a.addEventListener('click', window[linkItem.func]);
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        colDiv.appendChild(nav);

        return colDiv;
    }
}




// populateBio(bio, "bio");
populateContainer('bio', bio, createBioItem);
fetchData(gitConnected, mapBasicResponse);
populateContainer('languages', languages, createLanguageSkillElement);
Object.keys(skills).forEach(category => {
    populateContainer(category, skills[category], createSkillItem);
});
  // Example of populating Test Automation University certifications
  populateContainer('TAU', certifications.Test_Automation_University_TAU, createCertificationItem);

  // Similarly for LinkedIn Learning
  populateContainer('LinkedInLearning', certifications.LinkedInLearning, createCertificationItem);

  // And for technical certifications
  populateContainer('technical-certifications', certifications.technicalCertifications, createCertificationItem);

  // And for professional certifications
  populateContainer('professional-certifications', certifications.educationalCertifications, createCertificationItem);

populateContainer('experience', experience, createExperienceItem);
populateContainer('education', education, createEducationItem);

populateContainer('testimonialItems', testimonials.feedback, createTestimonialElement);

populateContainer('footer', footer, createFooterItem);

// populateLinks(footer, "footer");
