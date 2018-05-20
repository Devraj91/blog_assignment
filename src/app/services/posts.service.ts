import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor() { }

  getInstaPosts() {
     // This could be a service call for dynamic Insta Posts
    return  [
        { title: 'Bootstrap Grid system',
        // tslint:disable-next-line:max-line-length
        content: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes'},
       {
         title: 'Alerts',
         content: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages'
       },
       {
         title: 'Cards',
         // tslint:disable-next-line:max-line-length
         content: 'A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards'
       },
       {
         title: 'Carousel',
         content: 'A slideshow component for cycling through elements—images or slides of text—like a carousel'
       },
       {
         title: 'Alerts',
         // tslint:disable-next-line:max-line-length
         content: 'Examples and usage guidessssslines for form control styles, layout options, and custom components for creating a wide variety of forms'
       }

      ];

  }

  getTwitterPosts() {
    // This could be a service call for dynamic Twitter Posts
   return  [
       { title: 'Angular Architechture',
       // tslint:disable-next-line:max-line-length
       content: 'Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.'},
      {
        title: 'Angular Modules',
        // tslint:disable-next-line:max-line-length
        content: 'Angular apps are modular and Angular has its own modularity system called NgModules. An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.'
      },
      {
        title: 'Angular Components',
        // tslint:disable-next-line:max-line-length
        content: 'The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata. In the example code below, you can see that HeroListComponent is just a class, with no special Angular notation or syntax at all. Its not a component until you mark it as one with the @Component decorator.'
      },
      {
        title: 'Angular Service and DI',
        // tslint:disable-next-line:max-line-length
        content: 'Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well'
      },
      {
        title: 'Angular LIfecycle hooks',
        // tslint:disable-next-line:max-line-length
        content: 'Directive and component instances have a lifecycle as Angular creates, updates, and destroys them. Developers can tap into key moments in that lifecycle by implementing one or more of the lifecycle hook interfaces in the Angular core library.'
      }

     ];

 }


}
