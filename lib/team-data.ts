export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  bio: string
  expertise: string[]
  education: string[]
  projects: string[]
}

export const teamMembers: TeamMember[] = [
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    position: "Principal Architect",
    image: "/placeholder.svg?height=800&width=1600",
    bio: "Alex Johnson is the Principal Architect and founder of KAAMI ARSITEK STUDIO. With over 20 years of experience in architectural design, Alex has led numerous award-winning projects across residential, commercial, and cultural sectors. His approach combines innovative design thinking with a deep commitment to sustainability and contextual sensitivity.\n\nAlex's work is characterized by a thoughtful integration of form, function, and environmental considerations. He believes that architecture should not only solve practical problems but also create meaningful experiences and contribute positively to its surroundings. Throughout his career, Alex has collaborated with diverse clients and communities, always striving to understand their unique needs and aspirations.\n\nBefore founding KAAMI ARSITEK STUDIO, Alex worked at several prestigious architectural firms in Europe and Asia, where he developed a global perspective on design. He holds a Master's degree in Architecture from Harvard University and has taught design studios at various institutions.",
    expertise: ["Sustainable Design", "Urban Planning", "Residential Architecture", "Cultural Buildings"],
    education: [
      "Master of Architecture, Harvard University",
      "Bachelor of Arts in Environmental Design, University of California",
    ],
    projects: ["Urban Residential Complex", "Cultural Center", "Sustainable Office Tower"],
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    position: "Design Director",
    image: "/placeholder.svg?height=800&width=1600",
    bio: "Sarah Chen serves as the Design Director at KAAMI ARSITEK STUDIO, where she oversees the creative direction of all projects. With a background in both architecture and interior design, Sarah brings a holistic approach to spatial design that considers every aspect of the user experience.\n\nKnown for her innovative design solutions and attention to detail, Sarah has been instrumental in developing the studio's distinctive aesthetic language. She excels at translating complex client requirements into coherent, beautiful, and functional designs. Her work spans various scales, from intimate residential interiors to large public spaces.\n\nSarah is particularly interested in the intersection of traditional craftsmanship and contemporary technology. She often incorporates local materials and techniques into her designs while embracing advanced digital tools for design development and visualization. This balance between the handmade and the high-tech gives her projects a unique character that is both timeless and forward-looking.\n\nBefore joining KAAMI ARSITEK STUDIO, Sarah worked at leading design firms in Singapore and New York. She holds a Master's degree in Architecture from Yale University and regularly participates in design juries and lectures.",
    expertise: ["Interior Design", "Exhibition Design", "Material Innovation", "Digital Fabrication"],
    education: [
      "Master of Architecture, Yale University",
      "Bachelor of Fine Arts in Interior Design, Rhode Island School of Design",
    ],
    projects: ["Waterfront Pavilion", "Mountain Retreat", "Desert Museum"],
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    position: "Technical Lead",
    image: "/placeholder.svg?height=800&width=1600",
    bio: "Michael Rodriguez is the Technical Lead at KAAMI ARSITEK STUDIO, where he bridges the gap between design vision and technical execution. With extensive experience in building technology and construction management, Michael ensures that the studio's innovative designs are realized with precision and integrity.\n\nMichael's expertise lies in structural systems, building performance, and construction methodologies. He works closely with the design team from the early stages of each project, providing technical input that informs the design process. This collaborative approach allows the studio to create buildings that are not only aesthetically compelling but also technically sound and buildable.\n\nParticularly passionate about sustainable building practices, Michael has led the implementation of various green building strategies across the studio's projects. He stays at the forefront of developments in building technology and regularly introduces new materials and systems that enhance the performance and environmental credentials of the studio's work.\n\nBefore joining KAAMI ARSITEK STUDIO, Michael worked as a structural engineer and project manager for major construction firms. He holds a Master's degree in Structural Engineering from MIT and is a licensed architect and engineer.",
    expertise: ["Building Technology", "Structural Design", "Construction Management", "Sustainable Systems"],
    education: ["Master of Science in Structural Engineering, MIT", "Bachelor of Architecture, University of Texas"],
    projects: ["Sustainable Office Tower", "Educational Campus", "Urban Renewal Project"],
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    position: "Project Manager",
    image: "/placeholder.svg?height=800&width=1600",
    bio: "Emma Wilson is a Project Manager at KAAMI ARSITEK STUDIO, where she orchestrates the complex process of bringing architectural projects to life. With her exceptional organizational skills and strategic thinking, Emma ensures that projects progress smoothly from concept to completion, meeting quality standards, timelines, and budgets.\n\nEmma's strength lies in her ability to coordinate diverse teams of professionals, including architects, engineers, consultants, contractors, and clients. She creates clear communication channels and establishes efficient workflows that allow all stakeholders to collaborate effectively. Her leadership style is both decisive and inclusive, fostering a positive and productive project environment.\n\nWith a background in both architecture and business administration, Emma brings a unique perspective to project management. She understands the creative process and technical challenges of architectural work while also maintaining a focus on client objectives and project economics. This balanced approach has been key to the successful delivery of many of the studio's most complex projects.\n\nBefore joining KAAMI ARSITEK STUDIO, Emma worked in project management roles at architectural and development firms. She holds a Master's degree in Architecture from Columbia University and an MBA from INSEAD.",
    expertise: ["Project Planning", "Team Coordination", "Client Relations", "Budget Management"],
    education: [
      "Master of Architecture, Columbia University",
      "Master of Business Administration, INSEAD",
      "Bachelor of Science in Architectural Studies, University of Illinois",
    ],
    projects: ["Cultural Center", "Urban Residential Complex", "Floating Apartments"],
  },
  {
    id: "david-kim",
    name: "David Kim",
    position: "Sustainability Specialist",
    image: "/placeholder.svg?height=800&width=1600",
    bio: "David Kim is the Sustainability Specialist at KAAMI ARSITEK STUDIO, where he leads the firm's efforts to create environmentally responsible architecture. With deep knowledge of sustainable design principles, green building certification systems, and environmental analysis tools, David ensures that sustainability is integrated into every aspect of the studio's work.\n\nDavid's approach to sustainability goes beyond technical solutions to embrace a holistic vision of environmental, social, and economic responsibility. He believes that truly sustainable architecture must not only minimize its ecological footprint but also enhance the well-being of its users and contribute positively to its community. This comprehensive perspective informs his input on all projects, from initial concept to detailed design.\n\nParticularly interested in biophilic design and regenerative architecture, David explores ways to create buildings that do more than just reduce harm—they actively restore and improve their environments. He has pioneered the use of various innovative strategies, including passive design techniques, renewable energy systems, water conservation measures, and healthy material selections.\n\nBefore joining KAAMI ARSITEK STUDIO, David worked as a sustainability consultant for architectural firms and developers. He holds a Master's degree in Environmental Design from the University of British Columbia and is accredited in multiple green building certification systems.",
    expertise: ["Green Building Certification", "Environmental Analysis", "Biophilic Design", "Energy Modeling"],
    education: [
      "Master of Environmental Design, University of British Columbia",
      "Bachelor of Science in Environmental Engineering, Stanford University",
    ],
    projects: ["Sustainable Office Tower", "Mountain Retreat", "Educational Campus"],
  },
  {
    id: "olivia-martinez",
    name: "Olivia Martinez",
    position: "Interior Designer",
    image: "/placeholder.svg?height=800&width=1600",
    bio: "Olivia Martinez is an Interior Designer at KAAMI ARSITEK STUDIO, where she creates thoughtful and inspiring interior spaces that complement the architectural vision. With her refined aesthetic sensibility and attention to detail, Olivia transforms spaces into environments that enhance the user experience and reflect the unique character of each project.\n\nOlivia's design approach is characterized by a careful consideration of spatial quality, materiality, light, and human comfort. She believes that successful interior design should engage all the senses and create a meaningful connection between people and their surroundings. Her work spans various typologies, from residential and hospitality to workplace and cultural spaces.\n\nWith a particular interest in the intersection of art, craft, and design, Olivia often collaborates with artists and artisans to incorporate unique elements into her interiors. She is skilled at curating materials, furniture, and objects that come together to create cohesive and compelling spaces with a sense of authenticity and place.\n\nBefore joining KAAMI ARSITEK STUDIO, Olivia worked at interior design firms in Milan and Barcelona. She holds a Master's degree in Interior Architecture from the Royal College of Art in London and regularly contributes to design publications.",
    expertise: ["Residential Interiors", "Hospitality Design", "Furniture Design", "Material Curation"],
    education: [
      "Master of Interior Architecture, Royal College of Art",
      "Bachelor of Arts in Interior Design, Parsons School of Design",
    ],
    projects: ["Mountain Retreat", "Cultural Center", "Urban Residential Complex"],
  },
]

export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id)
}

export function getAllTeamMemberIds(): string[] {
  return teamMembers.map((member) => member.id)
}
