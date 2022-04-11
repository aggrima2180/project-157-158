AFRAME.registerComponent("highlight-posters", {
    schema:{default:'',type:"string"},
    init: function() {
      this.handleMouseEnterEvent()
      this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListner("mouseenter",()=>{
            const id=this.el.getAttribute("id")
            const posterid=["superman","spiderman","captain-aero","outer-space"]
            if(posterid.includes(id)){
                const postersContainer=document.querySelector("#posters-container")
                postersContainer.setAttribute("highlight-posters",{
                    selectedItemId:id
                })
                this.el.setAttribute("material",{color:"#D76B30"})
            }
        })
    },
    handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", { color: "#fff" });
            }
          }
        });
      },
})