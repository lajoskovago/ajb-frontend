
var data =
[
  {
    tags: [],
    _id: '5fae8b28e3555f22e40abeb8',
    title: 'Test1',
    subtitle: 'test1',
    __v: 0,
    content: 'Test1 content'
  },
  {
    tags: [],
    _id: '5f9c2235cc1e72b8ec34a0bd',
    title: 'Test',
    subtitle: 'test',
    __v: 0,
    content: 'Test content'
  }
]
let oCRUD = {

  init: function() {
      this.setDOMElements();
      this.getPersons();
  },

  setDOMElements: function() {
      this.oTemplate = document.querySelector('#ajbb'); 
      this.oTbody =  document.querySelector("tbody");
      this.oClone = document.importNode(oCRUD.oTemplate.content, true);
      this.oTd = oCRUD.oClone.querySelectorAll("td");
  },   
  
  refreshClone: function() {
    this.oClone = document.importNode(oCRUD.oTemplate.content, true);
    this.oTd = oCRUD.oClone.querySelectorAll("td");
  },

  getPersons: function() {
     
         data.forEach((element,index) => {
           
           oCRUD.refreshClone();
        //   oCRUD.oTd[0].textContent = element._id;
           oCRUD.oTd[0].textContent = element.title;
           oCRUD.oTd[1].textContent = element.subtitle;
         //  oCRUD.oTd[3].textContent = element.__v;
          // oCRUD.oTd[4].textContent = element.content;
           oCRUD.oTbody.appendChild(oCRUD.oClone);
      });

  }
}

oCRUD.init();