import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Target, Code, BarChart3, Search, GraduationCap, ArrowRight, ExternalLink, ChevronsRight, FlaskConical, Clipboard, ClipboardCheck, AlertCircle, MousePointerClick, FileText, Briefcase, CheckCircle, XCircle, Shuffle } from 'lucide-react';

// --- Data for the Roadmap (Massively Expanded) ---
const roadmapData = [
  {
    phase: "Phase 1: The Foundational Layer",
    icon: Target,
    duration: "Weeks 1-4",
    goal: "Understand the digital advertising ecosystem, its language, and the flow of money.",
    steps: [
      {
        title: "Learn the Ecosystem Players",
        content: "Understand the role of each entity in the complex ad-tech landscape.",
        details: [
          { term: "Advertiser/Client", definition: "The company with a product/service to promote (e.g., Nike, Coca-Cola)." },
          { term: "Agency", definition: "A company that plans, creates, and manages ad campaigns for advertisers (e.g., WPP, Omnicom)." },
          { term: "Publisher", definition: "The owner of a website or app that has ad space to sell (e.g., The New York Times, ESPN.com)." },
          { term: "Ad Exchange", definition: "A digital marketplace where advertisers and publishers trade ad impressions through real-time auctions (e.g., Google AdX, OpenX)." },
          { term: "Demand-Side Platform (DSP)", definition: "Software used by advertisers to buy ads programmatically. Key for media buyers (e.g., The Trade Desk, DV360)." },
          { term: "Supply-Side Platform (SSP)", definition: "Software used by publishers to sell their ad inventory programmatically (e.g., Magnite, Google Ad Manager)." },
        ],
        lab: {
          title: "Lab: Match the Player",
          description: "Drag the definition and drop it onto the correct ecosystem player. This reinforces your understanding of who's who.",
          component: 'EcosystemMatcherLab'
        }
      },
      {
        title: "Master Core Terminology",
        content: "This is the non-negotiable language of Ad Ops. You'll use these terms daily.",
        details: [
            { term: "Impression", definition: "A single instance of an ad appearing on a page." },
            { term: "Click", definition: "When a user clicks on an ad." },
            { term: "CTR (Click-Through Rate)", definition: "The percentage of impressions that result in a click. Formula: (Clicks / Impressions) * 100%" },
            { term: "CPM (Cost Per Mille)", definition: "The cost an advertiser pays for 1,000 ad impressions. The most common pricing model." },
            { term: "CPC (Cost Per Click)", definition: "The cost an advertiser pays for each click on an ad." },
            { term: "CPA (Cost Per Acquisition)", definition: "The cost for a user completing a specific action (e.g., a purchase, a sign-up)." },
            { term: "Pixel / Tag", definition: "A snippet of JavaScript code placed on a website to track user actions or build audiences." },
            { term: "Viewability", definition: "A metric that tracks whether an ad was actually seen by a user (IAB Standard: 50% of pixels in view for 1 second)." },
        ],
        resources: [
            { name: "IAB Glossary", url: "https://www.iab.com/insights/iab-glossary-of-terminology/", type: "Reading" },
        ]
      },
    ]
  },
  {
    phase: "Phase 2: Core Technical Skills",
    icon: Code,
    duration: "Weeks 5-10",
    goal: "Acquire the fundamental technical skills needed to execute and troubleshoot daily Ad Ops tasks.",
    steps: [
      {
        title: "Ad Tag & Pixel Fundamentals",
        content: "Ad tags and pixels are the delivery mechanisms and measurement tools of Ad Ops. You must understand how they work.",
        details: [
            { term: "Ad Tag Anatomy", definition: "A piece of JavaScript that tells the browser to fetch an ad from the ad server. It contains information about the ad slot, publisher, and creative." },
            { term: "Impression Pixels", definition: "A 1x1 transparent image pixel used to count impressions. When it loads, an impression is recorded." },
            { term: "Click Trackers", definition: "A URL that first redirects to the ad server to record a click, then sends the user to the final landing page." },
            { term: "Conversion/Floodlight Pixels", definition: "Placed on a confirmation page (e.g., 'Thank you for your purchase') to track conversions." },
        ],
        lab: {
            title: "Practice: Ad Tag Inspector",
            description: "An ad tag can look intimidating. This lab breaks down a real-world tag into its core components so you can understand what each part does.",
            component: 'AdTagInspectorLab'
        }
      },
      {
        title: "UTM & URL Parameters",
        content: "UTMs are essential for tracking the effectiveness of marketing campaigns in analytics platforms.",
        details: [
            { term: "Purpose", definition: "To tell analytics tools where your traffic is coming from." },
            { term: "utm_source", definition: "The referrer (e.g., google, newsletter)." },
            { term: "utm_medium", definition: "The marketing medium (e.g., cpc, email, social)." },
            { term: "utm_campaign", definition: "The specific campaign name (e.g., summer_sale_2025)." },
        ],
        lab: {
            title: "Practice: UTM Parameter Builder",
            description: "Use this tool to build campaign tracking URLs. This is a common daily task for an Ad Ops professional.",
            component: 'UTMBuilderLab'
        }
      },
    ]
  },
   {
    phase: "Phase 3: Platform & Tool Mastery",
    icon: BarChart3,
    duration: "Weeks 11-20",
    goal: "Gain practical knowledge of the key platforms. Certifications and hands-on practice are key.",
    steps: [
        {
            title: "Google Ad Manager (GAM)",
            content: "The world's most popular publisher ad server. You must know its structure and workflow.",
            details: [
                { term: "GAM Hierarchy", definition: "The core structure: Order (the advertiser) > Line Item (the campaign details) > Creative (the actual ad)." },
                { term: "Line Item Types", definition: "Understand the difference between Sponsorship (takes 100% of impressions), Standard (goal-based), and House (unsold inventory)." },
                { term: "Targeting", definition: "How to deliver ads based on geography, device, custom key-values, and more." },
            ],
            lab: {
                title: "Practice: GAM Line Item Creator",
                description: "Simulate creating a Line Item in Google Ad Manager. This will familiarize you with the required fields and options.",
                component: 'LineItemCreatorLab'
            }
        },
        {
            title: "Campaign Manager 360 (CM360)",
            content: "The industry-standard 3rd-party ad server (3PAS) for advertisers to track all campaigns in one place.",
            details: [
                { term: "Role of 3PAS", definition: "To provide a single source of truth for an advertiser running ads across many different publishers and networks." },
                { term: "Floodlight Tags", definition: "CM360's conversion tracking tags. They measure user actions on the advertiser's site after seeing or clicking an ad." },
                { term: "Trafficking Workflow", definition: "You create placements in CM360, upload creatives, and then send CM360 tags to publishers to run in their ad server (like GAM)." },
            ],
            resources: [
                { name: "Google Skillshop: CM360", url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=4690-campaign-manager", type: "Certification" },
            ]
        },
        {
            title: "Google Tag Manager (GTM)",
            content: "A tool to manage and deploy all marketing and analytics tags (pixels) on a website without editing code.",
            details: [
                { term: "Containers", definition: "A GTM account holds containers. A container holds all the tags, triggers, and variables for your website." },
                { term: "Tags", definition: "The snippets of code (e.g., GA4 tag, conversion pixel) you want to fire." },
                { term: "Triggers", definition: "The rules that tell GTM when to fire a tag (e.g., on a specific page view, on a button click)." },
                { term: "Variables", definition: "Placeholders for values that can change (e.g., a transaction ID, product name)." },
            ],
            lab: {
                title: "Practice: GTM Tag & Trigger Lab",
                description: "Simulate creating a Google Analytics 4 tag and a Page View trigger within the GTM interface.",
                component: 'GTMSimulatorLab'
            }
        }
    ]
  },
  {
    phase: "Phase 4: Troubleshooting",
    icon: Search,
    duration: "Ongoing",
    goal: "Become an expert problem-solver. This is what separates junior from senior Ad Ops talent.",
    steps: [
        {
            title: "Browser Developer Tools",
            content: "Your number one troubleshooting tool. Master the Network and Console tabs in Chrome DevTools.",
            details: [
                { term: "Network Tab", definition: "Use this to see if your ad tags and pixels are firing correctly (Status 200 OK) or failing (Status 404 Not Found)." },
                { term: "Console Tab", definition: "Look for red JavaScript errors that might be preventing an ad from rendering or a pixel from firing." },
                { term: "Elements Tab", definition: "Inspect the page's HTML to see if the ad slot `<div>` is present on the page and has the correct ID." },
            ],
            lab: {
                title: "Practice: Network Request Inspector",
                description: "A campaign is live, but conversions aren't tracking. Use this simulated network inspector to find the conversion pixel and check its status.",
                component: 'TagInspectorLab'
            }
        }
    ]
  },
  {
    phase: "Phase 5: Getting Hired",
    icon: GraduationCap,
    duration: "Final Step",
    goal: "Build a portfolio, craft a perfect resume, and land your first Ad Ops role.",
    steps: [
        {
            title: "The Ad Ops Mini-Project",
            content: "This project provides tangible proof of your skills. It's the single most important thing you can do to get hired.",
            details: [
                { term: "Objective", definition: "To create a live website, install industry-standard tools, and run a real ad campaign from start to finish." },
            ],
            lab: {
                title: "Guide: Build Your Mini-Project",
                description: "Follow this detailed, step-by-step guide to build your portfolio project. Each step includes instructions and resource links.",
                component: 'MiniProjectGuide'
            }
        },
        {
            title: "Craft Your Resume",
            content: "Your resume is your first impression. It needs to be tailored for Ad Ops roles, highlighting your new skills and project.",
            details: [
                { term: "Keywords", definition: "Include terms like 'Ad Trafficking', 'Campaign Management', 'Google Ad Manager', 'CM360', 'GTM', 'Troubleshooting', 'Pixel Implementation'." },
                { term: "Quantify Achievements", definition: "Even for your project, use numbers. 'Trafficked 5 line items' or 'Achieved a 99% delivery rate'." },
            ],
            lab: {
                title: "Tool: Interactive Resume Builder",
                description: "Use this tool to build a professional Ad Ops resume. Select from expert-written bullet points and fill in your details to generate a polished final document.",
                component: 'ResumeBuilderLab'
            }
        },
    ]
  },
];

// --- Reusable Components ---
const ResourceCard = ({ name, url, type }) => ( <a href={url} target="_blank" rel="noopener noreferrer" className="group block p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-300 border border-gray-700 hover:border-teal-500"> <div className="flex items-center justify-between"> <div> <p className="text-sm font-semibold text-teal-400">{type}</p> <h4 className="text-md font-bold text-gray-100 mt-1">{name}</h4> </div> <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" /> </div> </a> );
const DetailItem = ({ term, definition }) => ( <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-teal-400 before:rounded-full"> <h5 className="font-semibold text-gray-100">{term}</h5> <p className="text-gray-400 mt-1 text-sm">{definition}</p> </div> );

// --- Lab Components ---
const UTMBuilderLab = () => { const [baseUrl, setBaseUrl] = useState('https://www.example.com'); const [source, setSource] = useState('google'); const [medium, setMedium] = useState('cpc'); const [campaign, setCampaign] = useState('summer_sale'); const [generatedUrl, setGeneratedUrl] = useState(''); const [copied, setCopied] = useState(false); useEffect(() => { const params = new URLSearchParams(); if (source) params.append('utm_source', source); if (medium) params.append('utm_medium', medium); if (campaign) params.append('utm_campaign', campaign); const queryString = params.toString(); setGeneratedUrl(queryString ? `${baseUrl}?${queryString}` : baseUrl); }, [baseUrl, source, medium, campaign]); const handleCopy = () => { const tempInput = document.createElement('input'); tempInput.value = generatedUrl; document.body.appendChild(tempInput); tempInput.select(); document.execCommand('copy'); document.body.removeChild(tempInput); setCopied(true); setTimeout(() => setCopied(false), 2000); }; return ( <div className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Base URL</label> <input type="text" value={baseUrl} onChange={e => setBaseUrl(e.target.value)} className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"/> </div> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Campaign Source (utm_source)</label> <input type="text" value={source} onChange={e => setSource(e.target.value)} className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"/> </div> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Campaign Medium (utm_medium)</label> <input type="text" value={medium} onChange={e => setMedium(e.target.value)} className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"/> </div> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Campaign Name (utm_campaign)</label> <input type="text" value={campaign} onChange={e => setCampaign(e.target.value)} className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"/> </div> </div> <div className="mt-4 p-4 bg-gray-800 rounded-lg"> <h4 className="text-md font-semibold text-white mb-2">Generated URL:</h4> <div className="relative"> <p className="text-teal-300 break-all bg-gray-900 p-3 rounded-md">{generatedUrl}</p> <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600"> {copied ? <ClipboardCheck className="w-5 h-5 text-green-400" /> : <Clipboard className="w-5 h-5 text-gray-300" />} </button> </div> </div> </div> ); };
const TagInspectorLab = () => { const requests = [ { id: 1, name: 'style.css', type: 'Stylesheet', status: 200 }, { id: 2, name: 'main.js', type: 'Script', status: 200 }, { id: 3, name: 'logo.png', type: 'Image', status: 200 }, { id: 4, name: 'conversion-pixel?id=123', type: 'Pixel', status: 200, isCorrect: true }, { id: 5, name: 'analytics.js', type: 'Script', status: 404 }, { id: 6, name: 'tracker.gif', type: 'Image', status: 200 }, ]; const [selected, setSelected] = useState(null); const [message, setMessage] = useState(''); const handleSelect = (req) => { setSelected(req); if (req.isCorrect && req.status === 200) { setMessage('Correct! This is the conversion pixel and it fired successfully (Status 200).'); } else if (req.status === 404) { setMessage('This tag failed to load (Status 404). This could be a problem, but it\'s not the conversion pixel we are looking for.'); } else { setMessage('This is a valid request, but it is not the conversion pixel. Keep looking!'); } }; return ( <div> <p className="text-gray-400 mb-4">Click on the network requests below to inspect them. Find the conversion pixel that fired successfully.</p> <div className="bg-gray-800 rounded-lg border border-gray-700"> <div className="p-2 bg-gray-900/50 font-mono text-sm grid grid-cols-3 text-gray-400"> <div>Name</div><div>Type</div><div>Status</div> </div> <ul className="divide-y divide-gray-700"> {requests.map(req => ( <li key={req.id} onClick={() => handleSelect(req)} className={`p-2 grid grid-cols-3 font-mono text-sm cursor-pointer hover:bg-gray-700/50 ${selected?.id === req.id ? 'bg-teal-500/20' : ''}`}> <div className="text-teal-300 break-all">{req.name}</div> <div className="text-gray-300">{req.type}</div> <div className={req.status === 200 ? 'text-green-400' : 'text-red-400'}>{req.status}</div> </li> ))} </ul> </div> {message && ( <div className={`mt-4 p-3 rounded-lg flex items-center ${selected?.isCorrect ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}> <AlertCircle className="w-5 h-5 mr-3"/> {message} </div> )} </div> ); };
const LineItemCreatorLab = () => { const [message, setMessage] = useState(''); const handleSubmit = (e) => { e.preventDefault(); const formData = new FormData(e.target); const name = formData.get('name'); const type = formData.get('type'); if (name && type) { setMessage(`Success! Line Item "${name}" of type "${type}" has been created. This simulates saving the entry in Google Ad Manager.`); } }; return ( <form onSubmit={handleSubmit} className="space-y-4"> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Line Item Name</label> <input required name="name" type="text" placeholder="e.g., US-Q3-Summer-Sale-Desktop" className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"/> </div> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Line Item Type</label> <select required name="type" className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-2 focus:ring-teal-500"> <option>Sponsorship</option> <option>Standard</option> <option>Price Priority</option> <option>House</option> </select> </div> <div className="space-y-2"> <label className="text-sm font-semibold text-gray-300">Targeting: Geography</label> <div className="flex gap-4"> <label className="flex items-center"><input type="checkbox" className="mr-2 bg-gray-700"/>USA</label> <label className="flex items-center"><input type="checkbox" className="mr-2 bg-gray-700"/>Canada</label> <label className="flex items-center"><input type="checkbox" className="mr-2 bg-gray-700"/>UK</label> </div> </div> <button type="submit" className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors">Create Line Item</button> {message && <div className="mt-4 p-3 rounded-lg flex items-center bg-green-500/20 text-green-300"><AlertCircle className="w-5 h-5 mr-3"/>{message}</div>} </form> ); };
const EcosystemMatcherLab = () => { const initialPlayers = useRef([ { id: 'p1', term: 'Advertiser' }, { id: 'p2', term: 'Agency' }, { id: 'p3', term: 'Publisher' }, { id: 'p4', term: 'DSP' }, ]).current; const initialDefs = useRef([ { id: 'd1', text: 'Buys ads programmatically', matches: 'p4' }, { id: 'd2', text: 'Owns the website/app with ad space', matches: 'p3' }, { id: 'd3', text: 'Company whose product is being advertised', matches: 'p1' }, { id: 'd4', text: 'Manages campaigns on behalf of clients', matches: 'p2' }, ]).current; const [players, setPlayers] = useState(initialPlayers); const [definitions, setDefinitions] = useState(initialDefs); const [draggedDef, setDraggedDef] = useState(null); const [results, setResults] = useState({}); const [message, setMessage] = useState(''); const handleDragStart = (e, def) => { setDraggedDef(def); e.dataTransfer.effectAllowed = 'move'; }; const handleDragOver = (e) => { e.preventDefault(); }; const handleDrop = (e, player) => { e.preventDefault(); if (draggedDef) { const isMatch = draggedDef.matches === player.id; setResults(prev => ({ ...prev, [player.id]: isMatch })); setDefinitions(defs => defs.filter(d => d.id !== draggedDef.id)); setDraggedDef(null); const newResults = { ...results, [player.id]: isMatch }; const allDone = players.every(p => newResults[p.id] !== undefined); if (allDone) { const allCorrect = players.every(p => newResults[p.id]); setMessage(allCorrect ? 'Excellent! You matched all players correctly.' : 'Good try! Some matches were incorrect. Reset to try again.'); } } }; const resetLab = () => { setDefinitions(initialDefs); setResults({}); setMessage(''); }; return ( <div> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div className="space-y-4"> <h4 className="font-bold text-white">Ecosystem Players</h4> {players.map(p => ( <div key={p.id} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, p)} className={`p-4 rounded-lg border-2 border-dashed flex items-center justify-between ${results[p.id] === true ? 'border-green-500 bg-green-500/10' : ''} ${results[p.id] === false ? 'border-red-500 bg-red-500/10' : 'border-gray-600'}`} > <span className="text-lg font-semibold">{p.term}</span> {results[p.id] === true && <CheckCircle className="text-green-500" />} {results[p.id] === false && <XCircle className="text-red-500" />} </div> ))} </div> <div className="space-y-4"> <h4 className="font-bold text-white">Definitions (Drag these)</h4> {definitions.map(d => ( <div key={d.id} draggable onDragStart={(e) => handleDragStart(e, d)} className="p-4 rounded-lg bg-gray-700 cursor-grab active:cursor-grabbing" > {d.text} </div> ))} </div> </div> {message && ( <div className={`mt-6 p-3 rounded-lg flex items-center ${message.includes('Excellent') ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}> <AlertCircle className="w-5 h-5 mr-3"/> {message} </div> )} <button onClick={resetLab} className="mt-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors flex items-center"> <Shuffle className="w-4 h-4 mr-2"/> Reset Lab </button> </div> ); };
const AdTagInspectorLab = () => { const tag = `<script src="https://ad.doubleclick.net/ddm/ad/N1234.567890.SITE/B1234567;sz=300x250;ord=${'${'}CACHEBUSTER${'}'};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?"></script>`; const parts = [ { part: 'https://ad.doubleclick.net/ddm/ad/', explanation: 'The base URL for the DoubleClick (CM360) ad server.' }, { part: 'N1234.567890.SITE/', explanation: 'Advertiser and Site ID. This tells the ad server which advertiser and website this tag belongs to.' }, { part: 'B1234567;', explanation: 'Placement ID. This identifies the specific ad placement within a campaign.' }, { part: 'sz=300x250;', explanation: 'Size. Defines the dimensions of the ad creative (300 pixels wide by 250 pixels high).' }, { part: 'ord=${CACHEBUSTER};', explanation: 'Cache Buster. A random number macro inserted by the publisher ad server to ensure the browser fetches a fresh ad every time and doesn\'t use a cached version. This is critical for accurate impression counting.' }, ]; const [revealed, setRevealed] = useState({}); const toggleReveal = (index) => { setRevealed(prev => ({ ...prev, [index]: !prev[index] })); }; return ( <div> <p className="text-gray-400 mb-4">Below is a standard CM360 ad tag. Click on each component to learn what it does.</p> <div className="p-4 bg-gray-900 rounded-lg font-mono text-sm text-teal-300 break-all mb-6">{tag}</div> <div className="space-y-3"> {parts.map((item, index) => ( <div key={index} className="p-3 bg-gray-800 rounded-lg border border-gray-700"> <button onClick={() => toggleReveal(index)} className="w-full text-left flex justify-between items-center"> <span className="font-mono text-white">{item.part}</span> <MousePointerClick className="w-5 h-5 text-teal-400"/> </button> {revealed[index] && <p className="mt-2 pt-2 border-t border-gray-600 text-gray-300">{item.explanation}</p>} </div> ))} </div> </div> ); };
const GTMSimulatorLab = () => { const [tagName, setTagName] = useState(''); const [tagType, setTagType] = useState('ga4_event'); const [triggerName, setTriggerName] = useState(''); const [triggerType, setTriggerType] = useState('pageview'); const [message, setMessage] = useState(''); const handleSubmit = (e) => { e.preventDefault(); if (tagName.toLowerCase().includes('ga4') && triggerType === 'pageview') { setMessage('Success! You\'ve correctly configured a GA4 tag to fire on a page view. This is the most common setup for basic web analytics tracking.'); } else { setMessage('Configuration saved, but consider best practices. Typically, a GA4 tag is named clearly and often fires on a "Page View" trigger for initial setup.'); } }; return ( <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700"> <h4 className="text-xl font-bold text-white mb-4">Create New Tag</h4> <form onSubmit={handleSubmit} className="space-y-6"> <div className="p-4 border border-gray-600 rounded-lg"> <h5 className="font-semibold text-gray-200 mb-2">Tag Configuration</h5> <div className="space-y-2"> <label className="text-sm text-gray-400">Tag Name</label> <input value={tagName} onChange={e => setTagName(e.target.value)} required placeholder="e.g., GA4 - Page View Tracking" className="w-full bg-gray-700 rounded p-2 text-white"/> </div> <div className="space-y-2 mt-4"> <label className="text-sm text-gray-400">Tag Type</label> <select value={tagType} onChange={e => setTagType(e.target.value)} className="w-full bg-gray-700 rounded p-2 text-white"> <option value="ga4_event">Google Analytics: GA4 Event</option> <option value="conversion_linker">Conversion Linker</option> <option value="custom_html">Custom HTML</option> </select> </div> </div> <div className="p-4 border border-gray-600 rounded-lg"> <h5 className="font-semibold text-gray-200 mb-2">Triggering</h5> <div className="space-y-2"> <label className="text-sm text-gray-400">Trigger Name</label> <input value={triggerName} onChange={e => setTriggerName(e.target.value)} required placeholder="e.g., All Pages" className="w-full bg-gray-700 rounded p-2 text-white"/> </div> <div className="space-y-2 mt-4"> <label className="text-sm text-gray-400">Trigger Type</label> <select value={triggerType} onChange={e => setTriggerType(e.target.value)} className="w-full bg-gray-700 rounded p-2 text-white"> <option value="pageview">Page View</option> <option value="click">Click - All Elements</option> <option value="form_submission">Form Submission</option> </select> </div> </div> <button type="submit" className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500">Save Tag</button> </form> {message && <div className="mt-4 p-3 rounded-lg flex items-center bg-green-500/20 text-green-300"><AlertCircle className="w-5 h-5 mr-3"/>{message}</div>} </div> ); };
const MiniProjectGuide = () => { const steps = [ { title: "Step 1: Set Up Your Blog", icon: FileText, details: "Use a free, simple platform. The goal is to have a live site, not to become a web developer. Options: Blogger.com, a simple GitHub Pages site, or even a Carrd.co landing page.", resources: [{name: "Create a blog on Blogger", url:"https://www.blogger.com"}, {name: "Create a site with GitHub Pages", url:"https://pages.github.com/"}] }, { title: "Step 2: Create Content & Ad Slots", icon: FileText, details: "Write 3-4 short articles on a topic you enjoy. Then, edit your site's HTML to add empty `<div>` elements where you want ads to appear. Give them unique IDs like `<div id='ad-slot-1'></div>`." }, { title: "Step 3: Set Up GA4 and GTM", icon: BarChart3, details: "Create a new Google Analytics 4 property. Then, create a Google Tag Manager container. Place the GTM container code on your blog. Finally, use GTM to deploy your GA4 configuration tag. This is the standard industry workflow.", resources: [{name: "Google Analytics", url:"https://analytics.google.com/"}, {name: "Google Tag Manager", url:"https://tagmanager.google.com/"}] }, { title: "Step 4: Set Up Google Ad Manager", icon: BarChart3, details: "Sign up for a free Google Ad Manager account. In GAM, define your ad inventory by creating Ad Units that correspond to the `<div>` IDs you created on your site (e.g., 'ad-slot-1'). Generate the ad tags for these units.", resources: [{name: "Sign up for GAM", url:"https://admanager.google.com/"}] }, { title: "Step 5: Traffic a 'House Ad'", icon: Target, details: "Place the GAM ad tags into the corresponding `<div>`s on your blog. In GAM, create an Order for yourself ('My House Ads'). Create a Line Item targeting your ad units, set the type to 'House'. Upload a simple image you made as the Creative. Save and approve. Within 30 minutes, you should see your own ad on your site!" }, { title: "Step 6: Analyze and Document", icon: Briefcase, details: "Let your ad run for a day. Take screenshots of your GAM line item showing impressions delivered. Take screenshots of Google Analytics showing page views. Write a one-page summary of what you did. Add this project to your resume!" }, ]; return ( <div className="space-y-4"> {steps.map((step, index) => ( <div key={index} className="p-4 bg-gray-800/70 rounded-lg border border-gray-700"> <div className="flex items-center mb-3"> <step.icon className="w-6 h-6 text-teal-400 mr-3"/> <h4 className="text-lg font-bold text-white">{step.title}</h4> </div> <p className="text-gray-300 ml-9">{step.details}</p> {step.resources && <div className="ml-9 mt-3 flex gap-4">{step.resources.map(res => <ResourceCard key={res.name} {...res} />)}</div>} </div> ))} </div> ); };
const ResumeBuilderLab = () => { const [name, setName] = useState('Your Name'); const [email, setEmail] = useState('your.email@example.com'); const [phone, setPhone] = useState('123-456-7890'); const [linkedin, setLinkedin] = useState('linkedin.com/in/yourprofile'); const [summary, setSummary] = useState('Detail-oriented Ad Operations professional with hands-on experience in campaign trafficking, tag management, and troubleshooting. Proven ability to ensure flawless execution and accurate reporting for digital advertising campaigns. Seeking to leverage technical skills in a challenging Ad Ops role.'); const bulletPoints = { "Trafficking": [ "Trafficked and managed digital ad campaigns across multiple platforms, including Google Ad Manager.", "Ensured timely and accurate setup of orders, line items, and creatives, maintaining a <1% error rate.", "Handled various creative types, including standard display, rich media, and video (VAST/VPAID)." ], "Technical Skills": [ "Implemented and managed tracking pixels (impression, click, conversion) using Google Tag Manager (GTM).", "Utilized browser developer tools (Chrome DevTools) to troubleshoot ad delivery, pixel firing, and creative rendering issues.", "Built and validated campaign tracking URLs using UTM parameters for accurate attribution in Google Analytics." ], "Project": [ "Completed a comprehensive portfolio project involving the setup of a live website with integrated Google Analytics and Ad Manager.", "Successfully trafficked a house ad campaign, managing the entire lifecycle from ad unit creation to reporting on delivered impressions.", "Gained practical experience in the end-to-end Ad Ops workflow, from technical setup to campaign analysis." ] }; const [selectedBullets, setSelectedBullets] = useState({ Trafficking: [0], "Technical Skills": [0], Project: [0, 1] }); const toggleBullet = (category, index) => { const newSelection = [...selectedBullets[category]]; const currentIndex = newSelection.indexOf(index); if (currentIndex === -1) { newSelection.push(index); } else { newSelection.splice(currentIndex, 1); } setSelectedBullets(prev => ({ ...prev, [category]: newSelection })); }; return ( <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div> <h4 className="text-lg font-bold text-white mb-4">1. Customize Your Resume Content</h4> <div className="space-y-4"> {/* Inputs for personal info */} <div className="p-4 bg-gray-800 rounded-lg space-y-2"> <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-700 p-2 rounded text-lg font-bold" /> <div className="flex gap-4"> <input value={email} onChange={e => setEmail(e.target.value)} className="w-1/2 bg-gray-700 p-2 rounded text-sm" /> <input value={phone} onChange={e => setPhone(e.target.value)} className="w-1/2 bg-gray-700 p-2 rounded text-sm" /> </div> <input value={linkedin} onChange={e => setLinkedin(e.target.value)} className="w-full bg-gray-700 p-2 rounded text-sm" /> </div> <textarea value={summary} onChange={e => setSummary(e.target.value)} rows="4" className="w-full bg-gray-800 p-2 rounded text-sm" /> {/* Bullet point selection */} {Object.entries(bulletPoints).map(([category, bullets]) => ( <div key={category}> <h5 className="font-semibold text-teal-400 mb-2">{category} Experience</h5> <div className="space-y-2"> {bullets.map((bullet, index) => ( <label key={index} className="flex items-start p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"> <input type="checkbox" checked={selectedBullets[category].includes(index)} onChange={() => toggleBullet(category, index)} className="mt-1 mr-3 h-4 w-4 rounded bg-gray-600 border-gray-500 text-teal-500 focus:ring-teal-500" /> <span className="text-sm text-gray-300">{bullet}</span> </label> ))} </div> </div> ))} </div> </div> <div className="sticky top-0"> <h4 className="text-lg font-bold text-white mb-4">2. Your Generated Resume</h4> <div id="resume-output" className="p-6 bg-white text-gray-800 rounded-lg shadow-lg font-serif"> <h2 className="text-2xl font-bold text-center">{name}</h2> <p className="text-center text-xs mb-4">{email} | {phone} | {linkedin}</p> <h3 className="font-bold border-b-2 border-gray-300 pb-1 mb-2">Summary</h3> <p className="text-sm mb-4">{summary}</p> <h3 className="font-bold border-b-2 border-gray-300 pb-1 mb-2">Ad Operations Experience</h3> <ul className="list-disc list-inside text-sm space-y-1"> {Object.entries(selectedBullets).flatMap(([category, indexes]) => indexes.map(index => <li key={`${category}-${index}`}>{bulletPoints[category][index]}</li>) )} </ul> <h3 className="font-bold border-b-2 border-gray-300 pb-1 mb-2 mt-4">Certifications</h3> <ul className="list-disc list-inside text-sm space-y-1"> <li>Google Ads Certified</li> <li>Campaign Manager 360 Certified</li> </ul> </div> <button onClick={() => window.print()} className="mt-4 w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500">Print / Save as PDF</button> </div> </div> ); };

const PracticalLab = ({ lab }) => {
    const renderLab = () => {
        switch (lab.component) {
            case 'UTMBuilderLab': return <UTMBuilderLab />;
            case 'TagInspectorLab': return <TagInspectorLab />;
            case 'LineItemCreatorLab': return <LineItemCreatorLab />;
            case 'EcosystemMatcherLab': return <EcosystemMatcherLab />;
            case 'AdTagInspectorLab': return <AdTagInspectorLab />;
            case 'GTMSimulatorLab': return <GTMSimulatorLab />;
            case 'MiniProjectGuide': return <MiniProjectGuide />;
            case 'ResumeBuilderLab': return <ResumeBuilderLab />;
            default: return <div className="text-center p-8 bg-gray-800 rounded-lg"><FlaskConical className="mx-auto w-12 h-12 text-teal-500 mb-4"/> <h3 className="text-xl font-bold">Lab Not Found</h3></div>;
        }
    };
    return ( <div> <h3 className="text-xl font-bold text-white mb-2">{lab.title}</h3> <p className="text-gray-400 mb-6">{lab.description}</p> <div className="p-2 md:p-6 rounded-lg bg-gray-800/50 border border-gray-700"> {renderLab()} </div> </div> );
};

// --- Main App Component ---
export default function App() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('theory');
  const mainContentRef = useRef(null);

  const activePhase = roadmapData[activePhaseIndex];
  const activeStep = activePhase.steps[activeStepIndex];

  const handleStepSelect = (phaseIdx, stepIdx) => {
    setActivePhaseIndex(phaseIdx);
    setActiveStepIndex(stepIdx);
    setActiveTab('theory'); 
    mainContentRef.current?.scrollTo(0, 0);
  };
  
  const TabButton = ({ tabName, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      disabled={tabName === 'lab' && !activeStep.lab}
      className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed ${
        activeTab === tabName ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-200 flex flex-col md:flex-row">
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-900/80 backdrop-blur-sm border-r border-gray-800 p-4 md:p-6 md:h-screen md:overflow-y-auto">
        <div className="flex items-center mb-6 md:mb-8"> <BookOpen className="w-8 h-8 text-teal-400" /> <h1 className="text-xl font-bold ml-3 text-white">Ad Ops Learning Hub</h1> </div>
        <nav>
          <ul>
            {roadmapData.map((phase, phaseIdx) => (
              <li key={phase.phase} className="mb-6">
                <div className="flex items-center mb-3"> <phase.icon className="w-5 h-5 text-teal-500 mr-3" /> <h2 className="text-lg font-bold text-gray-100">{phase.phase}</h2> </div>
                <ul>
                  {phase.steps.map((step, stepIdx) => (
                    <li key={step.title}> <button onClick={() => handleStepSelect(phaseIdx, stepIdx)} className={`w-full text-left flex items-center p-2.5 rounded-md transition-all duration-200 ${ activePhaseIndex === phaseIdx && activeStepIndex === stepIdx ? 'bg-teal-500/20 text-white font-semibold' : 'text-gray-400 hover:bg-gray-800/60 hover:text-gray-200' }`}> <ChevronsRight className={`w-4 h-4 mr-3 transition-transform duration-300 ${activePhaseIndex === phaseIdx && activeStepIndex === stepIdx ? 'transform scale-125 text-teal-400' : ''}`} /> {step.title} </button> </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main ref={mainContentRef} className="w-full md:w-2/3 lg:w-3/4 p-4 md:p-10 h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-800/50 border border-gray-700 shadow-lg">
                <div className="flex items-center mb-3">
                    <activePhase.icon className="w-8 h-8 text-teal-400 mr-4" />
                    <div>
                        <p className="text-sm font-medium text-teal-400">{activePhase.phase} &bull; {activePhase.duration}</p>
                        <h1 className="text-3xl font-extrabold text-white mt-1">{activeStep.title}</h1>
                    </div>
                </div>
                <p className="text-gray-300 mt-2">{activePhase.goal}</p>
            </div>
            <div className="mb-6 flex space-x-2 border-b border-gray-700 pb-2">
                <TabButton tabName="theory" label="Theory" icon={BookOpen} />
                <TabButton tabName="lab" label="Practical Lab" icon={FlaskConical} />
            </div>
            {activeTab === 'theory' ? (
                <div className="space-y-8 animate-fade-in">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Core Concepts</h3>
                        <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
                        <p className="text-gray-300 mb-6">{activeStep.content}</p>
                        <div className="space-y-5"> {activeStep.details.map((item) => ( <DetailItem key={item.term} term={item.term} definition={item.definition} /> ))} </div>
                        </div>
                    </div>
                    {activeStep.resources && activeStep.resources.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Recommended Resources</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {activeStep.resources.map((res) => ( <ResourceCard key={res.name} {...res} /> ))} </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="animate-fade-in">
                    <PracticalLab lab={activeStep.lab} />
                </div>
            )}
            <div className="mt-12 flex justify-between items-center">
                <button onClick={() => { if (activeStepIndex > 0) { handleStepSelect(activePhaseIndex, activeStepIndex - 1); } else if (activePhaseIndex > 0) { const prevPhase = roadmapData[activePhaseIndex - 1]; handleStepSelect(activePhaseIndex - 1, prevPhase.steps.length - 1); } }} disabled={activePhaseIndex === 0 && activeStepIndex === 0} className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> Previous </button>
                <button onClick={() => { if (activeStepIndex < activePhase.steps.length - 1) { handleStepSelect(activePhaseIndex, activeStepIndex + 1); } else if (activePhaseIndex < roadmapData.length - 1) { handleStepSelect(activePhaseIndex + 1, 0); } }} disabled={activePhaseIndex === roadmapData.length - 1 && activeStepIndex === activePhase.steps.length - 1} className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"> Next Step <ArrowRight className="w-5 h-5 ml-2" /> </button>
            </div>
        </div>
      </main>
    </div>
  );
}
