import { Name, LastName, FullName, mail, metaTitle, metaDescription, metaKeywords, metaAuthor, contactInfo, githubUsername, bio, languages, certifications, education, experience, footer, skills, testimonials } from './data.js';
import { URLs } from './user-data/urls.js';

/**
 * Set the meta tags and title dynamically
 */
function setMetaTags() {
    document.title = metaTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', metaDescription);
    document.querySelector('meta[name="keywords"]').setAttribute('content', metaKeywords);
    document.querySelector('meta[name="author"]').setAttribute('content', metaAuthor);
}

/**
 * Improved element creation function that can also attach events.
 */
function createElement(type, { className, text, style, attributes, events, children } = {}) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (text) element.textContent = text;
    if (style) element.setAttribute('style', style);
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
    items.forEach((item, index) => {
        // console.log('Appending item to container:', containerId, 'item:', item, 'index:', index);
        container.appendChild(createElementCallback(item, index));
    });

}

/**
 * Example of a generic createElementCallback
 */
function createBioItem(item) {
    return createElement('p', { text: item });
}

/**
 * Creates a language skill element with a progress bar.
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

    const listItem = document.createElement('li');
    listItem.className = 'skill-item';

    if (imagePath) {
        const image = document.createElement('img');
        image.className = 'skill-logo';
        image.setAttribute('src', imagePath);
        image.setAttribute('alt', `Logo of ${skillName}`);
        image.setAttribute('loading', 'lazy');
        listItem.appendChild(image);
    }

    const skillNameSpan = document.createElement('span');
    skillNameSpan.className = 'skill-name';
    skillNameSpan.textContent = skillName;
    listItem.appendChild(skillNameSpan);

    const descriptionP = document.createElement('p');
    descriptionP.className = 'skill-description';
    descriptionP.textContent = description || '';  // Set to empty string if no description
    listItem.appendChild(descriptionP);

    return listItem;
}

function createCertificationItem(certification) {
    const { certificationName = '', image = '', preview = '#', description = '' } = certification || {};

    const certificationCard = document.createElement('li');
    certificationCard.className = 'skill-item';

    const link = document.createElement('a');
    link.setAttribute('href', preview);
    link.setAttribute('target', '_blank');
    certificationCard.appendChild(link);

    if (image) {
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.setAttribute('alt', `Image of ${certificationName}`);
        img.setAttribute('class', 'certification-img');
        img.setAttribute('loading', 'lazy');
        link.appendChild(img);
    }

    const nameElement = document.createElement('h4');
    nameElement.textContent = certificationName;
    nameElement.className = 'skill-name';
    link.appendChild(nameElement);

    if (description) {
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        link.appendChild(descriptionElement);
    }

    return certificationCard;
}

function createExperienceItem(experience) {
    const { title, subtitle, duration, details, tags, icon } = experience;

    const experienceEntry = document.createElement('article');
    experienceEntry.className = 'timeline-entry animate-box fadeInUp animated';

    const timelineInner = document.createElement('div');
    timelineInner.className = 'timeline-entry-inner';

    const timelineIcon = document.createElement('div');
    timelineIcon.className = 'timeline-icon color-3';
    const iconElement = document.createElement('i');
    iconElement.className = `fa ${icon}`;
    timelineIcon.appendChild(iconElement);

    const timelineLabel = document.createElement('div');
    timelineLabel.className = 'timeline-label';

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

    const educationEntry = document.createElement('article');
    educationEntry.className = 'timeline-entry animate-box fadeInUp animated';

    const timelineInner = document.createElement('div');
    timelineInner.className = 'timeline-entry-inner';

    const timelineIcon = document.createElement('div');
    timelineIcon.className = 'timeline-icon color-3';
    const iconElement = document.createElement('i');
    iconElement.className = `fa ${icon}`;
    timelineIcon.appendChild(iconElement);

    const timelineLabel = document.createElement('div');
    timelineLabel.className = 'timeline-label';

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
    educationEntry.appendChild(timelineInner);

    return educationEntry;
}


/**
 * Creates an HTML element for a testimonial.
 * @param {Object} testimonial - An object containing the title and detail of a testimonial.
 * @param {boolean} isActive - A boolean indicating if the testimonial is active.
 * @returns {HTMLElement} - A DOM element representing the testimonial.
 */
function createTestimonialElement(testimonial, isActive) {
    // console.log(isActive);
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
            paragraph.innerHTML = text;
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

/**
 * Create and return a GitHub card element.
 */
function createGitHubCard(username) {
    const githubCardDiv = document.getElementById('github-card');
    githubCardDiv.setAttribute('username', username);
    return githubCardDiv;
}

/**
 * Create and return a category element.
 */
function createCategoryElement(categoryName, items, createItemCallback) {
    const listItem = createElement('li');
    const linkDiv = createElement('div', { className: 'link', children: [['p', { text: categoryName, style: 'margin-bottom: 0px; cursor: pointer;' }]] });
    const sublist = createElement('ul', { className: 'submenu', style: 'display: none;' });

    listItem.appendChild(linkDiv);
    listItem.appendChild(sublist);

    // Populate the sublist with items
    items.forEach(item => {
        sublist.appendChild(createItemCallback(item));
    });

    // Add click event to toggle the submenu display
    linkDiv.addEventListener('click', () => {
        const isDisplayed = sublist.style.display === 'flex' || sublist.style.display === '';
        sublist.style.display = isDisplayed ? 'none' : 'flex';
    });

    return listItem;
}

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

function mapBasicResponse(response) {
    const { basics } = response;
    const { name, label, image, email, phone } = basics;
    // console.log(basics);
    window.parent.document.title = name;
    // Use other properties as needed
    // For example, you can add the label to the title
    if (label) {
        window.parent.document.title += ` - ${label}`;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    try {
        // Initialization code
        setMetaTags();

        document.getElementById('fullname').textContent = FullName;
        document.getElementById('email').textContent = mail;
        document.getElementById('email').setAttribute('href', `mailto:${mail}`);
        document.getElementById('contact-info').textContent = contactInfo;

        createGitHubCard(githubUsername);

        populateContainer('bio', bio, createBioItem);
        fetchData(URLs.gitConnected, mapBasicResponse);
        populateContainer('languages', languages, createLanguageSkillElement);

        const skillsAccordion = document.getElementById('skills-accordion');
        Object.keys(skills).forEach(category => {
            if (skills[category]) {
                const categoryElement = createCategoryElement(category.replace(/_/g, ' '), skills[category], createSkillItem);
                skillsAccordion.appendChild(categoryElement);
            } else {
                console.warn(`Undefined skill category: ${category}`);
            }
        });

        const certificationsAccordion = document.getElementById('accordion');
        Object.keys(certifications).forEach(category => {
            if (certifications[category]) {
                const categoryElement = createCategoryElement(category.replace(/_/g, ' '), certifications[category], createCertificationItem);
                certificationsAccordion.appendChild(categoryElement);
            } else {
                console.warn(`Undefined certification category: ${category}`);
            }
        });

        populateContainer('experience', experience, createExperienceItem);
        populateContainer('education', education, createEducationItem);

        // Populate testimonials with active class on the first item
        // console.log('Populating testimonials');
        populateContainer('testimonialItems', testimonials.feedback, (item, index) => {
            // console.log('Creating testimonial item:', item, 'at index:', index);
            return createTestimonialElement(item, index === 0);
        });

        populateContainer('footer', footer, createFooterItem);

        // Initialize the carousel with interval
        const carouselElement = $('#testimonialCarousel');
        carouselElement.carousel({
            interval: 3000 // Set the interval to 3 seconds
        });

        // Pause the carousel when buttons are clicked
        document.getElementById('prevTestimonial').addEventListener('click', () => {
            carouselElement.carousel('prev');
            carouselElement.carousel('pause');
        });

        document.getElementById('nextTestimonial').addEventListener('click', () => {
            carouselElement.carousel('next');
            carouselElement.carousel('pause');
        });

        // Resume the carousel when clicking outside the buttons
        document.addEventListener('click', (event) => {
            const isClickInside = event.target.closest('#prevTestimonial') || event.target.closest('#nextTestimonial');
            if (!isClickInside) {
                carouselElement.carousel('cycle');
            }
        });

    } catch (error) {
        console.error(`Error during initialization: ${error.message}`);
    }
});