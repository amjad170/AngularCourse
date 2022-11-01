import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses=[
    {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Free',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Primium',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Free',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Primium',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Free',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Primium',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Free',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Free',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'},
  {id:101, name:'JavaScript for beginer',author:'Jnon Hekela',durarion:48,type: 'Primium',price:0.00,ratig:4.5,image:'assets/courses/course-image-1.jpeg',
  description:'loremlskajoirueqorfksjfowiuerioqurilkjsdoa;uewioruoiqwurohwkj'}
  ]

getTotalcourses(){
  return this.courses.length;
}

getTotalFreeCourses(){
  return this.courses.filter(course=>course.type==='Free').length;
}

getTotalPremiumCourses(){
  return this.courses.filter(course=>course.type==='Primium').length;
}

}
