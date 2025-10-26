let users = [
  {
    uName: "Zakir Khan",
    uRole: "Web Developer",
    ucomment: "I enjoy creating responsive and modern web applications using React and Node.js. I’m always curious to learn about new frontend frameworks and backend optimizations, and I spend time refining UI performance and accessibility.",
    uImage: "https://i.pravatar.cc/150?img=1"
  },
  {
    uName: "Hassan Ali",
    uRole: "Web Developer",
    ucomment: "Passionate about clean UI design and seamless user experience. I focus on building interactive, mobile-friendly web interfaces with attention to performance, code quality, and cross-browser consistency.",
    uImage: "https://i.pravatar.cc/150?img=2"
  },
  {
    uName: "Fatima Noor",
    uRole: "Graphic Designer",
    ucomment: "Design is my language. I love turning creative ideas into visual stories through typography, color, and layout — working on brand identity projects and illustrations that communicate clearly.",
    uImage: "https://i.pravatar.cc/150?img=3"
  },
  {
    uName: "Ahmed Raza",
    uRole: "Data Analyst",
    ucomment: "I analyze complex datasets to discover trends and insights that help improve decision-making. My work includes cleaning data, building dashboards, and presenting findings in a story-driven way.",
    uImage: "https://i.pravatar.cc/150?img=4"
  },
  {
    uName: "Sana Tariq",
    uRole: "Mobile App Developer",
    ucomment: "I specialize in developing Android and iOS apps that deliver smooth user experiences. My interest lies in Flutter and native development, and I like optimizing app performance and UX flows.",
    uImage: "https://i.pravatar.cc/150?img=5"
  },
  {
    uName: "Bilal Khan",
    uRole: "Software Engineer",
    ucomment: "A problem solver by nature, I enjoy building efficient and scalable software systems. I like working with both backend APIs and system architecture to deliver stable products.",
    uImage: "https://i.pravatar.cc/150?img=6"
  },
  {
    uName: "Ayesha Ahmed",
    uRole: "Content Writer",
    ucomment: "Words are my tools. I create engaging and informative content that connects with audiences while maintaining clarity and authenticity. I also research deeply to ensure accuracy.",
    uImage: "https://i.pravatar.cc/150?img=7"
  },
  {
    uName: "Usman Farooq",
    uRole: "Cybersecurity Specialist",
    ucomment: "Dedicated to ensuring systems remain secure and resilient against cyber threats. I regularly test vulnerabilities and help teams strengthen their defenses and security practices.",
    uImage: "https://i.pravatar.cc/150?img=8"
  },
  {
    uName: "Maryam Iqbal",
    uRole: "UI/UX Designer",
    ucomment: "I blend creativity with usability to design interfaces that not only look good but are intuitive. I prototype user flows and test them to improve conversion and satisfaction.",
    uImage: "https://i.pravatar.cc/150?img=9"
  },
  {
    uName: "Taha Siddiqui",
    uRole: "AI Engineer",
    ucomment: "I work on developing and training machine learning models to solve real-world problems. My goal is to make AI solutions practical, interpretable, and accessible to product teams.",
    uImage: "https://i.pravatar.cc/150?img=10"
  }
];



let div = document.querySelector("#mainCard")

// showing first user

let currIndex = 0;
// console.log(users);

function showUser(){
    let cUser = users[currIndex]
    // console.log(cUser.uName); // cuurent user with index

    div.innerHTML = `
      <img src="${cUser.uImage}" alt="">

        <div id="info">
            <h1>${cUser.uName}</h1>
            <p>${cUser.uRole}</p>
        </div>

        <div id="comment">
            <p>${cUser.ucomment}</p>
        </div>

        <div id="btns">
            <i onclick="goBack()" class="fa-solid fa-less-than"></i>
            <i onclick="goNext()" class="fa-solid fa-greater-than"></i>
        </div>

        <div id="surprise">
            <button onclick="randUser()">surprise</button>
        </div>    
    `;
};


function goNext(){
    currIndex++;
    // console.log(currIndex);
    // console.log(users[currIndex].uName);

    if(currIndex >= users.length){
        currIndex = 0;
    }
    showUser();
}

function goBack(){
    currIndex--;

    if(currIndex < 0){
        currIndex = users.length - 1;
    }

    showUser()
}

function randUser(){

    let rand = Math.floor(Math.random() * users.length)

    if(currIndex == rand){
        rand = Math.floor(Math.random() * users.length)
    }
    currIndex = rand
    showUser()

}

showUser()

