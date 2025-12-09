import {
	backend,
	creator,
	web,
	meta,
	starbucks,
	tesla,
	shopify,
	django,
	react
  } from "../assets";
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "work",
	  title: "Project",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const services = [
	{
	  title: "Web Developer",
	  icon: web,
	},
	{
	  title: "Django Developer",
	  icon: django,
	},
	{
	  title: "Backend Developer",
	  icon: backend,
	},
	{
	  title: "Frontend Developer",
	  icon: creator,
	},
  ];
  
  const Projects = [
	{
	  title: "React.js Developer",
	  icon: react,
	  iconBg: "#383E56",
	  points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
	  ],
	},
	{
	  title: "Django Framework Developer",
	  icon: django,
	  iconBg: "#E6DEDD",
	  points: [
		"Developed a secure user authentication system with signup and login functionality using Django’s built-in authentication framework .",
		"Implemented password reset feature with token-based email verification, including custom templates and integration of Django’s AUTH views.",
		"Designed and connected user profile management, allowing users to edit profile information and upload profile pictures using a one-to-one relationship with Django’s User model..",
		"Utilized Django signals to automatically create and update user profiles upon registration.",
	  ],
	},
	
	
  ];
  
 
  
  
  
  export { services, Projects};