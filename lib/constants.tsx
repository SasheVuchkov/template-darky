import {Check, Code, Coffee, Hash, Home, Send, X} from '../components/icons';
import {LinkEntity, PriceTable as PriceTableType, Snippet, Testimonial} from './types';
import React from 'react';

export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const links: LinkEntity[] = [
    {
        href: '/',
        text: 'Home',
        icon: <Home />,
    },

    {
        href: '/portfolio',
        text: 'Portfolio',
        icon: <Code />,
    },

    {
        href: '/blog',
        text: 'Blog',
        icon: <Hash />,
        className: "mt-5"
    },

    {
        href: '/about',
        text: 'About',
        icon: <Coffee />,
        className: 'mt-5'
    },
    {
        href: '/contact',
        text: 'Contact',
        icon: <Send />,
    }
]

export const priceTables: PriceTableType[] = [
    {
        title: "Initial Consultation",
        price: {
            value: 'FREE',
            unit: 'hour',
            currency: ''
        },
        href: '/contact',
        items: [
            {
                text: 'Needs Assessment',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Defining Requirements',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Free Technical Audit',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'No Coding',
                icon: <X className="price-table-x" />
            },

            {
                text: 'No Fixing Bugs',
                icon: <X className="price-table-x" />
            },
        ]
    },
    {
        title: "Hourly Payment",
        price: {
            value: '39',
            unit: '/ hour',
            currency: '$',
        },
        href: '/contact',
        items: [
            {
                text: 'Website Development',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Website Maintenance',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Website Debugging',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Technical SEO',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Figma to HTML',
                icon: <Check className="price-table-check" />
            },
        ]
    },
    {
        title: "Full Time",
        price: {
            value: '7,300',
            unit: '/ month',
            currency: '$',
        },
        href: '/contact',
        items: [
            {
                text: 'Website Development',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Website Maintenance',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Website Debugging',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Technical SEO',
                icon: <Check className="price-table-check" />
            },

            {
                text: 'Figma to HTML',
                icon: <Check className="price-table-check" />
            },
        ]
    }
];


export const services: Snippet[] = [
    {
        title: 'Website Development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        href: '/contact'
    },

    {
        title: 'Website Maintenance',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        href: '/contact'
    },

    {
        title: 'Website Debugging',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        href: '/contact'
    },

    {
        title: 'Technical SEO',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        href: '/contact'
    },

    {
        title: 'Figma to HTML',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        href: '/contact'
    },

    {
        title: 'Website Audit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        href: '/contact'
    },
];


export const testimonials: Testimonial[] = [
    {
        name: 'Amanda Sting',
        occupation: 'Marketing Manager',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: '/images/testimonial-1.png',
        stars: 5,
    },

    {
        name: 'Robert Jackson',
        occupation: 'Project Manager',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: '/images/testimonial-2.png',
        stars: 4,
    },

    {
        name: 'Nadia Senoff',
        occupation: 'Business Owner',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: '/images/testimonial-3.png',
        stars: 5,
    },

    {
        name: 'Nick Ortox',
        occupation: 'Startup Founder',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: '/images/testimonial-4.png',
        stars: 5,
    },

    {
        name: 'Simon Vivaldis',
        occupation: 'Team Lead',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        photo: '/images/testimonial-5.png',
        stars: 5,
    },
];