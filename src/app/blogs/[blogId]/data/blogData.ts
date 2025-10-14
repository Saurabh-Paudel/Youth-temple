export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Together We Rise: Youth Shaping a Brighter Future",
    description: "Discover how young people are coming together to create meaningful change in their communities through collaboration and innovation.",
    content: {
      introduction: "At the heart of every thriving community lies the power of unity. Across the globe, young people are coming together to create meaningful change in their communities. They are not just dreamers; they are doers who are making a tangible difference in the lives of those around them. From organizing local clean-up drives to advocating for policy changes, these young leaders are proving that age is no barrier to making a positive impact. Their stories inspire us all to take action and work together towards a brighter future.",
      sections: [
        {
          title: "The Power of Unity",
          content: "In every corner of the world, young people are proving the power of unity. When young people join forces, they can achieve remarkable things. These young leaders are not just dreaming of a better future; they are actively building it. Through collaboration, innovation, and determination, they are addressing some of the most pressing challenges facing their communities. Whether it's tackling climate change, fighting for social justice, or improving access to education, these young people are making their voices heard and their actions felt."
        },
        {
          title: "Overcoming Challenges in Nepal",
          content: "In the mountains of Nepal, a group of young people are working together to overcome the challenges they face every day. These young leaders are not just dreaming of a better future; they are actively building it. Through collaboration, innovation, and determination, they are addressing some of the most pressing challenges facing their communities. Their story is one of resilience, hope, and the power of collective action. They are proving that when young people come together with a shared vision, they can overcome even the most daunting obstacles."
        },
        {
          title: "Dreams That Inspire",
          content: "Every young person has dreams, but these young leaders are turning their dreams into reality. They are not waiting for someone else to solve the problems they see in their communities; they are taking action themselves. Their courage and determination serve as an inspiration to us all. From starting social enterprises to launching awareness campaigns, these young people are showing us what's possible when we dare to dream big and work hard to make those dreams come true. Their stories remind us that change starts with a single step, and that each of us has the power to make a difference."
        }
      ]
    },
    author: "Olivia Rhye and Phoenix Baker",
    date: "Oct 6, 2025",
    readTime: "11 min read",
    image: "/assets/blog1.png",
    category: "Community"
  },
  {
    id: "2",
    title: "Every Child Deserves an Opportunity to Dream Big",
    description: "In Nepal, countless children grow up with untapped potential, held back by financial struggles and limited access to quality education.",
    content: {
      introduction: "In Nepal, countless children grow up with untapped potential, held back by financial struggles and limited access to quality education. At Asha Ko Mandir, we believe every child deserves the chance to imagine a brighter future and work towards achieving their dreams.",
      sections: [
        {
          title: "Breaking Barriers Through Education",
          content: "Education is the most powerful tool we can use to break the cycle of poverty. When children have access to quality education, they gain not just knowledge, but confidence, hope, and the skills needed to transform their lives and communities."
        },
        {
          title: "Creating Opportunities",
          content: "Through our programs, we create opportunities for children who might otherwise be forgotten. We provide scholarships, educational materials, and mentorship to help them succeed in their academic journey."
        },
        {
          title: "Building Dreams",
          content: "Every child we support is encouraged to dream big and work towards their goals. We believe that with the right support and opportunities, any child can achieve greatness and make a positive impact in the world."
        }
      ]
    },
    author: "Asha Ko Mandir Team",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    image: "/assets/blog2.png",
    category: "Education"
  },
  {
    id: "3",
    title: "Vocational Education Empowers Young People",
    description: "Vocational training is helping children learn new skills and design. As a result, they are able to earn a living and support their families.",
    content: {
      introduction: "Vocational training is helping children learn new skills and design. As a result, they are able to earn a living and support their families. Our vocational programs are designed to provide practical skills that lead to immediate employment opportunities.",
      sections: [
        {
          title: "Skills for Life",
          content: "Our vocational programs teach practical skills that students can use immediately to start earning income. From tailoring to computer skills, we focus on trades that are in demand in the local market."
        },
        {
          title: "Empowering Independence",
          content: "By learning vocational skills, young people gain the confidence and ability to become financially independent. This not only helps them but also allows them to support their families and contribute to their communities."
        },
        {
          title: "Building Sustainable Futures",
          content: "Vocational education creates sustainable pathways out of poverty. Students who complete our programs often go on to start their own businesses or find stable employment, creating a ripple effect of positive change."
        }
      ]
    },
    author: "Skills Development Team",
    date: "Feb 20, 2025",
    readTime: "6 min read",
    image: "/assets/blog3.png",
    category: "Skills Development"
  },
  {
    id: "4",
    title: "Culinary Arts Nurture Creativity and Passion",
    description: "Culinary training provides youth the skills to create delicious dishes while fostering creativity and passion for the culinary arts.",
    content: {
      introduction: "Culinary training provides youth the skills to create delicious dishes while fostering creativity and passion for the culinary arts. Our culinary programs are designed to teach both traditional and modern cooking techniques.",
      sections: [
        {
          title: "Learning Traditional Recipes",
          content: "Students learn to prepare traditional Nepali dishes, preserving cultural heritage while developing marketable skills. These recipes connect them to their roots while providing income opportunities."
        },
        {
          title: "Modern Cooking Techniques",
          content: "We also teach contemporary cooking methods and international cuisines, expanding students' repertoire and making them competitive in the hospitality industry."
        },
        {
          title: "Building Culinary Careers",
          content: "Many of our graduates have opened their own restaurants or found employment in hotels and catering services, turning their passion for cooking into sustainable careers."
        }
      ]
    },
    author: "Culinary Arts Team",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: "/assets/blog4.png",
    category: "Culinary Arts"
  },
  {
    id: "5",
    title: "Technology Education Prepares Future Innovators",
    description: "Technology education is essential for preparing students for the future. It provides them with the skills they need to succeed in the digital age.",
    content: {
      introduction: "Technology education is essential for preparing students for the future. It provides them with the skills they need to succeed in the digital age and opens doors to countless opportunities.",
      sections: [
        {
          title: "Digital Literacy Foundation",
          content: "We start with basic computer skills and digital literacy, ensuring every student can navigate the modern digital world with confidence and competence."
        },
        {
          title: "Programming and Development",
          content: "Advanced students learn programming languages and software development, preparing them for careers in the growing tech industry."
        },
        {
          title: "Innovation and Entrepreneurship",
          content: "We encourage students to use technology to solve local problems, fostering innovation and entrepreneurial thinking that benefits their communities."
        }
      ]
    },
    author: "Technology Team",
    date: "Dec 15, 2024",
    readTime: "9 min read",
    image: "/assets/blog1.png",
    category: "Technology"
  },
  {
    id: "6",
    title: "Environmental Awareness Through Youth Action",
    description: "Young environmental activists are taking action to protect our planet and create a more sustainable world for future generations.",
    content: {
      introduction: "Young environmental activists are taking action to protect our planet and create a more sustainable world for future generations. Our environmental programs empower youth to become stewards of nature.",
      sections: [
        {
          title: "Conservation Projects",
          content: "Students participate in tree planting, waste management, and conservation projects that directly benefit their local environment and communities."
        },
        {
          title: "Sustainable Practices",
          content: "We teach sustainable living practices and help students implement eco-friendly solutions in their daily lives and communities."
        },
        {
          title: "Environmental Leadership",
          content: "Many students become environmental leaders in their communities, organizing clean-up drives and awareness campaigns that create lasting positive impact."
        }
      ]
    },
    author: "Environmental Team",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image: "/assets/blog2.png",
    category: "Environment"
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
