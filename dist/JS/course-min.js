function dropdownFunction(){document.getElementById("dropdown1").classList.toggle("show")}$.ajax({type:"GET",url:"https://nckuhub.com/api/course/",success:function(e){vue_course_item.course_data_db=e.courses;for(var o=0;o<40;o++)vue_course_item.course_data.push(vue_course_item.course_data_db[o])}});var scroll1=$("#courseList").height(),scroll2=$("#course_item").height(),scroll3=$("#course_item").scrollTop();scroll3>100&&console.log("big");var courseList_height=$("#courseList").height(),courseList_scrollTop=document.getElementById("course_item").scrollTop;document.getElementById("test1").innerHTML=scroll1,document.getElementById("test2").innerHTML=scroll2,document.getElementById("test3").innerHTML=scroll3;var bottomHeight=$(document).height()-$(window).height(),vue_course_item=new Vue({el:"#course_item",data:{course_with_comment:[],course_data:[],course_data_db:[],course_by_depart:[],heartColor:!1,comment_only:!1},created:function(){},methods:{courseLink:function(e){vue_courseContent.isShow=!0,vue_courseContent.course_data=vue_course_item.course_data[e];var o="https://nckuhub.com/api/course/"+vue_courseContent.course_data.id;$.ajax({type:"GET",url:o,success:function(e){vue_courseContent.score_data=e,vue_courseContent.comment_data=e.comment,console.log("comment: "+vue_courseContent.comment_data.length),console.log("recommend: "+e.recommand),0==vue_courseContent.comment_data.length?$(".courseFeedback__msg--default").css("display","block"):$(".courseFeedback__msg--default").css("display","none")}})},addCourse:function(e){var o=vue_course_item.course_data[e];vue_wishList.wishList.push(o)},commentfilter:function(){1==document.getElementById("commentCheck").checked?this.comment_only=!0:this.comment_only=!1}}}),vue_courseList=new Vue({el:"#courseLink",data:[],methods:{},created:{}}),vue_courseContent=new Vue({el:"#courseContent",data:{isShow:!1,course_data:[],score_data:[],comment_data:[]},methods:{showContent:function(){vue_courseContent.isShow=!1}}}),vue_wishList=new Vue({el:"#wishList",data:{wishList:[]}}),vue_courseComment=new Vue({el:"#courseArrange",data:{course_data:[]},methods:{cfilter:function(){console.log("test"),1==document.getElementById("commentCheck").checked?(vue_course_item.comment_only=!0,vue_course_item.course_data=vue_course_item.course_with_comment):(vue_course_item.comment_only=!1,vue_course_item.course_data=vue_course_item.course_data),console.log("test2")},sortByDept:function(){var e=vue_course_item.course_data;console.log(e[0]),e.sort(function(e,o){return e.dept.localeCompare(o.dept)}),console.log(e),vue_course_item.course_data=e}}});