const jobCardData = [
    {
        "type": "Internship",
        "title": "Product Design",
        "location": "803 46th St Brooklyn, NY",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/1200px-Sql_data_base_with_logo.png",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Internship",
        "title": "Web Development",
        "location": "123 Main St, Los Angeles, CA",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2048px-Tensorflow_logo.svg.png",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Full-Time",
        "title": "Graphic Designer",
        "location": "456 Market St, San Francisco, CA",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/1200px-Sql_data_base_with_logo.png",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Part-Time",
        "title": "UI/UX Designer",
        "location": "789 Broadway, New York, NY",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NzEYuhZMCUIZzbgQyCin73mtDvsxsD9I4Q&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Internship",
        "title": "Content Writer",
        "location": "321 2nd Ave, Austin, TX",
        "image_url": "=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjkFYmhLc_TM-SZ5hRbI21D11ftGsNQcJww&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Freelance",
        "title": "SEO Specialist",
        "location": "654 Pine St, Seattle, WA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjkFYmhLc_TM-SZ5hRbI21D11ftGsNQcJww&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Contract",
        "title": "Data Analyst",
        "location": "987 Hill Rd, Boston, MA",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Node.js_logo.svg/590px-Node.js_logo.svg.png",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Full-Time",
        "title": "Project Manager",
        "location": "123 Elm St, Denver, CO",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjkFYmhLc_TM-SZ5hRbI21D11ftGsNQcJww&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Internship",
        "title": "Backend Developer",
        "location": "678 Cedar St, Chicago, IL",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/1200px-Sql_data_base_with_logo.png",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Internship",
        "title": "Frontend Developer",
        "location": "222 Maple St, Portland, OR",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Git-logo-orange.svg/2560px-Git-logo-orange.svg.png",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Internship",
        "title": "Product Design",
        "location": "803 46th St Brooklyn, NY",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjkFYmhLc_TM-SZ5hRbI21D11ftGsNQcJww&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Internship",
        "title": "Web Development",
        "location": "123 Main St, Los Angeles, CA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Full-Time",
        "title": "Graphic Designer",
        "location": "456 Market St, San Francisco, CA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Part-Time",
        "title": "UI/UX Designer",
        "location": "789 Broadway, New York, NY",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NzEYuhZMCUIZzbgQyCin73mtDvsxsD9I4Q&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Internship",
        "title": "Content Writer",
        "location": "321 2nd Ave, Austin, TX",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-VYpouZ72lMpQgbEV3O9PEBmhEWJOLJ2g&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Freelance",
        "title": "SEO Specialist",
        "location": "654 Pine St, Seattle, WA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Contract",
        "title": "Data Analyst",
        "location": "987 Hill Rd, Boston, MA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Full-Time",
        "title": "Project Manager",
        "location": "123 Elm St, Denver, CO",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Internship",
        "title": "Backend Developer",
        "location": "678 Cedar St, Chicago, IL",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/1200px-Sql_data_base_with_logo.png",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Internship",
        "title": "Frontend Developer",
        "location": "222 Maple St, Portland, OR",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Git-logo-orange.svg/2560px-Git-logo-orange.svg.png",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Part-Time",
        "title": "Mobile App Developer",
        "location": "50 Tech St, Atlanta, GA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Full-Time",
        "title": "Cloud Engineer",
        "location": "12 Cloud Ave, Miami, FL",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Internship",
        "title": "Machine Learning Engineer",
        "location": "450 AI Blvd, Palo Alto, CA",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2048px-Tensorflow_logo.svg.png",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Freelance",
        "title": "Copywriter",
        "location": "987 Madison Ave, Charlotte, NC",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-VYpouZ72lMpQgbEV3O9PEBmhEWJOLJ2g&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Contract",
        "title": "DevOps Engineer",
        "location": "1010 Jenkins St, Houston, TX",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Full-Time",
        "title": "Security Specialist",
        "location": "808 Network Ln, San Diego, CA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Part-Time",
        "title": "Social Media Manager",
        "location": "60 Digital Dr, Phoenix, AZ",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-VYpouZ72lMpQgbEV3O9PEBmhEWJOLJ2g&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Internship",
        "title": "Game Developer",
        "location": "77 Arcade Rd, Orlando, FL",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2048px-Tensorflow_logo.svg.png",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Freelance",
        "title": "Illustrator",
        "location": "33 Art Ln, Austin, TX",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-VYpouZ72lMpQgbEV3O9PEBmhEWJOLJ2g&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Contract",
        "title": "Blockchain Developer",
        "location": "999 Crypto Blvd, San Francisco, CA",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/1200px-Sql_data_base_with_logo.png",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Full-Time",
        "title": "Data Scientist",
        "location": "555 Stats Ave, Seattle, WA",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2048px-Tensorflow_logo.svg.png",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Internship",
        "title": "Digital Marketer",
        "location": "102 Tech Way, Boston, MA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQqJsbvACSmWSDMWR_AZY8of0JLZlCoD_hg&s",
        "action": "Browse Job",
        "is_favorited": false
      },
      {
        "type": "Freelance",
        "title": "Video Editor",
        "location": "25 Studio Rd, Hollywood, CA",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKO-VYpouZ72lMpQgbEV3O9PEBmhEWJOLJ2g&s",
        "action": "Browse Job",
        "is_favorited": true
      },
      {
        "type": "Full-Time",
        "title": "UI Developer",
        "location": "676 UX Blvd, Chicago, IL",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/2048px-Tensorflow_logo.svg.png",
        "action": "Browse Job",
        "is_favorited": false
      }
]

export default jobCardData;