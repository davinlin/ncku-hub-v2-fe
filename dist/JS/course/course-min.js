function dropdownFunction(){document.getElementById("dropdown1").classList.toggle("show")}$.ajax({type:"GET",url:"https://nckuhub.com/api/course/",success:function(e){vue_course_item.course_data=e.courses}});var scrollbottom=$(document).height()-$(window).height()-$(window).scrollTop();console.log(scrollbottom);var vue_course_item=new Vue({el:"#course_item",data:{course_with_comment:[],course_data:[],course_data_db:[],course_by_depart:[],heartColor:!1,comment_only:!1},created:function(){},methods:{courseLink:function(e){vue_courseContent.isShow=!0,vue_courseContent.course_data=vue_course_item.course_data[e];var o="https://nckuhub.com/api/course/"+vue_courseContent.course_data.id;$.ajax({type:"GET",url:o,success:function(e){console.log(e)}})},addCourse:function(e){var o=vue_course_item.course_data[e];vue_wishList.wishList.push(o)},commentfilter:function(){1==document.getElementById("commentCheck").checked?this.comment_only=!0:this.comment_only=!1}}}),vue_courseContent=new Vue({el:"#courseContent",data:{isShow:!1,course_data:[]},methods:{showContent:function(){vue_courseContent.isShow=!1}}}),vue_wishList=new Vue({el:"#wishList",data:{wishList:[]}}),vue_courseComment=new Vue({el:"#courseArrange",data:{course_data:[]},methods:{cfilter:function(){console.log("test"),1==document.getElementById("commentCheck").checked?(vue_course_item.comment_only=!0,vue_course_item.course_data=vue_course_item.course_with_comment):(vue_course_item.comment_only=!1,vue_course_item.course_data=vue_course_item.course_data),console.log("test2")},sortByDept:function(){var e=vue_course_item.course_data;console.log(e[0]),e.sort(function(e,o){return e.dept.localeCompare(o.dept)}),console.log(e),vue_course_item.course_data=e}}});