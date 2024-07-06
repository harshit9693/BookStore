import basket_icon from './basket_icon.png'
import logo from './logo.jpeg'
// import header_img from './header_image.jpg'
import search_icon from './search_icon.png'
import side_img from './side_img.jpg';
import header_img from './header_img.jpg'
import c1 from './c1.png'
import c2 from './c2.png'
import c3 from './c3.png'
import c4 from './c4.png'
import c5 from './c5.png'
import c6 from './c6.png'
import c7 from './c7.png'
import c8 from './c8.png'
import c9 from './c9.png'
import c10 from './c10.png'

import ct1 from './ct1.png'
import ct2 from './ct2.png'
import ct3 from './ct3.png'
import ct4 from './ct4.png'
import ct5 from './engineering.jfif'
import ct6 from './medical.png'
import ct7 from './others.jpg'

import f1 from './f1.png'
import f2 from './f2.png'
import f3 from './f3.png'
import f4 from './f4.png'
import f5 from './f5.png'
import f6 from './f6.png'
import f7 from './f7.png'

import nf1 from './nf1.png'
import nf2 from './nf2.png'
import nf3 from './nf3.png'
import nf4 from './nf4.png'
import nf5 from './nf5.png'
import nf6 from './nf6.png'
import nf7 from './nf7.png'
import nf8 from './nf8.png'
import nf9 from './nf9.png'
import nf10 from './nf10.png'

import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'
import s5 from './s5.png'
import s6 from './s6.png'
import s7 from './s7.png'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    side_img
}

export const category_list = [
    {
        category_name: "Fiction",
        category_image: ct1
    },
    {
      category_name: "Non Fiction",
      category_image: ct2
    },
    {
      category_name: "Children",
      category_image: ct3
    },
    {
      category_name: "Sci_Fi",
        category_image: ct4
    },
    {
        category_name: "Engineering",
          category_image: ct5
      },
      {
        category_name: "Medical",
          category_image: ct6
      }
      ,{
        category_name: "Others",
          category_image: ct7
      }
    ]

export const book_list = [
    {
        _id: "1",
        name: "All the Light We Cannot See",
        image: f1,
        price: 10,
        description: `"All the Light We Cannot See" by Anthony Doerr is a World War II novel that follows the lives of a blind French girl, Marie-Laure, and a German boy, Werner, whose paths converge in occupied France. The story explores themes of survival, resilience, and the human impact of war.`,
        category: "Fiction"
    },
    {
        _id: "2",
        name: "The Diamond Eye",
        image: f2,
        price: 18,
        description: `"The Diamond Eye" by Kate Quinn is a historical novel that tells the story of Lyudmila Pavlichenko, a Soviet sniper during World War II. Known as "Lady Death," she becomes a deadly force against the Nazis, but her journey also reveals the personal struggles and bravery behind her legendary reputation.`,
        category: "Fiction"
    }, {
        _id: "3",
        name: "Harry Potter",
        image: f3,
        price: 25,
        description: `The "Harry Potter" series by J.K. Rowling follows the journey of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry. Alongside his friends Hermione Granger and Ron Weasley, he battles the dark wizard Lord Voldemort, who seeks to conquer the wizarding world.`,
        category: "Fiction"
    }, {
        _id: "4",
        name: "Soul",
        image: f4,
        price: 24,
        description: `"Soul" by Olivia Winson is a novel that delves into the intricate journey of self-discovery and healing. It follows the protagonist's emotional and spiritual awakening as they navigate life's challenges, uncovering the profound strength and resilience of the human spirit.`,
        category: "Fiction"
    }, {
        _id: "5",
        name: "The Book Of Lost Friends",
        image: f5,
        price: 14,
        description: `"The Book of Lost Friends" by Lisa Wingate is a historical novel set in the post-Civil War era. It follows the intertwined stories of three women—Hannie, a former slave searching for her family; Lavinia, the daughter of a plantation owner; and Benedetta, a young teacher. Through their journeys, the novel explores themes of family, resilience, and the quest for identity and belonging.`,
        category: "Fiction"
    }, {
        _id: "6",
        name: "Act Of Oblivion",
        image: f6,
        price: 12,
        description: `"Act of Oblivion" by Robert Harris is a gripping historical novel that centers around the aftermath of the English Civil War. It follows the manhunt for the regicides who signed the death warrant of King Charles I, blending historical accuracy with thrilling narrative to explore themes of justice, retribution, and the complexities of political loyalty.`,
        category: "Fiction"
    }, {
        _id: "7",
        name: "One Page Story",
        image: f7,
        price: 20,
        description: `Vikram Lokhande, a reclusive man, discovers "The Chronicles of Elysium," a mysterious book that transports him to a world of magical adventures, rekindling his spirit and inspiring him to share its wonder with others.`,
        category: "Fiction"
    }, {
        _id: "8",
        name: "The Lonely Road We Travelled",
        image: nf1,
        price: 15,
        description:  "A memoir exploring personal journeys of struggle and resilience through life's challenges.        ",
        category: "Non Fiction"
    }, {
        _id: "9",
        name: "The Ultimate Anxiety Free Collection",
        image: nf2,
        price: 14,
        description: "A comprehensive guide offering strategies and insights to manage and overcome anxiety",
        category: "Non Fiction"
    }, {
        _id: "10",
        name: "The Adventure Playbook",
        image: nf3,
        price: 22,
        description: " A guidebook inspiring readers with practical tips and stories for embracing adventure and exploration.",
        category: "Non Fiction"
    }, {
        _id: "11",
        name: "Sunsets with ANNIE",
        image: nf4,
        price: 10,
        description: " A collection of heartfelt essays and reflections on life's beauty and the lessons learned from sunsets.",
        category: "Non Fiction"
    }, {
        _id: "12",
        name: "Living the Sweet Life",
        image: nf5,
        price: 12,
        description: "A lifestyle book sharing tips and recipes for achieving happiness and fulfillment in everyday life.",
        category: "Non Fiction"
    },
    {
        _id: "13",
        name: "Made to Impress",
        image: nf6,
        price: 12,
        description: "A guide to personal branding and professional success through impactful communication and presentation",
        category: "Non Fiction"
    },
    {
        _id: "14",
        name: "Creative PRENEUR",
        image: nf7,
        price: 18,
        description: " Insights and strategies for turning creativity into a successful entrepreneurial venture.",
        category: "Non Fiction"
    }, {
        _id: "15",
        name: "The Life of the Spider",
        image: nf8,
        price: 16,
        description: "A scientific exploration of spiders' behavior, habitats, and ecological importance.",
        category: "Non Fiction"
    }, {
        _id: "16",
        name: "STOP WISHING START CREATING",
        image: nf9,
        price: 24,
        description: "Motivational guidance to transform dreams into actionable goals and achievements.",
        category: "Non Fiction"
    }, {
        _id: "17",
        name: "The Future of Energy",
        image: nf10,
        price: 14,
        description: "An analysis of emerging trends and technologies shaping the future of global energy production and consumption.",
        category: "Non Fiction"
    }, {
        _id: "18",
        name: "EMI'S Beach Adventure",
        image: c1,
        price: 12,
        description: "Join EMI on a fun-filled adventure at the beach, where she discovers new friends and exciting experiences. This book is perfect for early learners who love the ocean and its wonders.",
        category:"Children"
    }, {
        _id: "19",
        name: "Awesome book of Words",
        image: c2,
        price: 20,
        description: " This colorful book is a treasure trove of words, introducing young readers to a world of vocabulary and language. With engaging illustrations and simple text, it's an ideal choice for building a strong foundation in reading.",
        category: "Children"
    }, {
        _id: "20",
        name: "My Toddler's First Words",
        image: c3,
        price: 15,
        description: "This delightful book is designed for toddlers, featuring simple, everyday words and objects that will help them develop their language skills. The colorful illustrations and easy-to-understand text make it a great starting point for early learners.",
        category: "Children"
    }, {
        _id: "21",
        name: "Learn The Way",
        image: c4,
        price: 14,
        description: "Embark on a journey of discovery with this engaging book, which teaches young readers important life skills and values. With its relatable characters and easy-to-follow storylines, it's an excellent choice for kids who are eager to learn.",
        category: "Children"
    }, {
        _id: "22",
        name: "Once Upon A Time",
        image: c5,
        price: 22,
        description: " Step into a world of fantasy and adventure with this enchanting book, which brings classic fairy tales to life. With its beautiful illustrations and captivating stories, it's a must-read for kids who love magic and wonder.",
        category: "Children"
    }, {
        _id: "23",
        name: "Learn the Fun Way",
        image: c6,
        price: 10,
        description: "Make learning a joyful experience with this interactive book, which uses games, puzzles, and activities to teach important skills. Perfect for kids who love to engage with their learning materials.",
        category: "Children"
    }, {
        _id: "24",
        name: "Story Book",
        image: c7,
        price: 12,
        description: "This charming book is a collection of heartwarming stories that will capture the imaginations of young readers. With its beautiful illustrations and engaging narratives, it's an ideal choice for kids who love to read and explore.",
        category: "Children"
    },
    {
        _id: "25",
        name: "In Your Own Backyard",
        image: c8,
        price: 12,
        description: "Explore the wonders of nature with this fascinating book, which reveals the secrets of the natural world. Perfect for kids who love the outdoors and are curious about the world around them.",
        category: "Children"
    },
    {
        _id: "26",
        name: "The Doe in the Forest",
        image: c9,
        price: 18,
        description: "Join a gentle doe on a journey through the forest, where she encounters friends and faces challenges. This beautifully illustrated book teaches important lessons about courage, kindness, and friendship.",
        category: "Children"
    }, {
        _id: "27",
        name: "The Circus Jelly",
        image: c10,
        price: 16,
        description: "Step right up to the most amazing circus show on earth, featuring a cast of colorful characters and death-defying stunts. This entertaining book is perfect for kids who love the excitement and thrill of the circus.",
        category: "Children"
    }, {
        _id: "28",
        name: "Voyage To Venus",
        image: s1,
        price: 24,
        description: "0Join a team of brave astronauts on a perilous journey to the planet Venus, where they uncover secrets about the universe and humanity's place in it.",
        category: "Sci_Fi"
    }, {
        _id: "29",
        name: "Authentic Book of Space",
        image: s2,
        price: 14,
        description: "Explore the wonders of the cosmos with this comprehensive guide to space travel, featuring stunning visuals and in-depth explanations of the latest scientific discoveries.",
        category: "Sci_Fi"
    }, {
        _id: "30",
        name: "Aliens",
        image: s3,
        price: 12,
        description: "When a group of humans encounters an extraterrestrial species, they must navigate a complex web of interspecies politics and ancient secrets to prevent a catastrophic war.",
        category: "Sci_Fi"
    }, {
        _id: "31",
        name: "Frogeting",
        image: s4,
        price: 20,
        description: "In a world where memories can be implanted, edited, and even stolen, a young woman discovers a hidden past that threatens to upend her entire existence.",
        category: "Sci_Fi"
    }, {
        _id: "32",
        name: "Hide and Seek",
        image: s5,
        price: 15,
        description: "When a group of friends discovers a way to manipulate reality, they must use their newfound powers to survive a deadly game of cat and mouse.",
        category: "Sci_Fi"
    },{
      _id: "33",
      name: "Equator",
      image: s6,
      price: 15,
      description: "On a planet where the laws of physics are twisted and distorted, a team of scientists must navigate treacherous landscapes and rival expeditions to unlock the secrets of the mysterious equator.",
      category: "Sci_Fi"
  },{
    _id: "34",
    name: "The History Of Science Fiction",
    image: s7,
    price: 15,
    description: " From ancient myths to modern classics, this comprehensive guide explores the evolution of science fiction as a genre, highlighting its key authors, works, and themes. A must-read for fans and scholars alike.",
    category: "Sci_Fi"
}
// ,{
//   _id: "35",
//   name: "Chosen Spirits",
//   image: s8,
//   price: 150,
//   description: `In a world where AI has surpassed human intelligence, a young "digital native" must navigate the complexities of virtual reality and ancient mythology to prevent a catastrophic war between humans and machines`,
//   category: "Sci_Fi"
// }
]