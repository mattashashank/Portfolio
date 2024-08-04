/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "ServiceNow Certified Application Developer",
    authors:
      "Validity : 2024 - 2028",
    conferences:
      "The ServiceNow Certified Application Developer (CAD) certification validated my skills in creating applications on the ServiceNow platform, including designing, developing, and implementing custom applications. It ensures proficiency in using ServiceNow's tools and methodologies to meet business needs effectively.", 
    researchYr: "Skills : Application Design and Development , Security and Access Control , User Interface ",
      
    citebox: "popup1",
    image: "assets/images/research-page/ServiceNowCAD.png",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "AWS Cloud Practitioner",
    authors:
      "Validity : 2024 - 2027",
    conferences:
      "The AWS Cloud Practitioner Certification demonstrated foundational knowledge of AWS cloud concepts, services, and terminology. It covered basic cloud architecture, billing, pricing, and support services to help individuals understand AWS's value proposition.",
    researchYr: "Skills : Cloud Concepts , AWS Services , Architectural Principles ",
    citebox: "popup2",
    image: "assets/images/research-page/AWS Cloud Practitioner.jpg",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Azure AI Fundamentals",
    authors: "Validity 2024 - 2027",
    conferences:
      "The Azure AI Foundation certification validated my understanding of core AI concepts and Azure AI services. It covers machine learning, cognitive services, and conversational AI, equipping me with the skills to implement AI solutions on the Azure platform.",
    researchYr: "Skills : AI Fundamentals , Data Processing and Model Training and Deployment",
    citebox: "popup3",
    image: "assets/images/research-page/Azure AI Fundamentals.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title:
      "ServiceNow Certified System Administrator ",
    authors:
      "Validity : 2024 - 2028",
    conferences:
      "The ServiceNow Certified System Administrator (CSA) certification validated my ability to manage and maintain the ServiceNow platform. It covers user interface customization, workflow automation, and system configuration to ensure effective IT service management.",
    researchYr: "Skills : User Interface Customization , Workflow Automation , Service Catalog and Request Management and Incident and Problem Management ",
    citebox: "popup4",
    image: "assets/images/research-page/ServiceNow CSA.png",
    citation: {
      vancouver:
        "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Natural Language Processing through Transformer Architecture",
    authors: "Dr. Sumith , Dr Rajib , Matta Shashank",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) (Not yet published)",
    researchYr: 2024,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },

  

 
 
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                  
            
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
