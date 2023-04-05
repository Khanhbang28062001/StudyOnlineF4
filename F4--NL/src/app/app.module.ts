import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CourseComponent } from './course/course.component';
import { KeepStudyComponent } from './keep-study/keep-study.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostsDraftsComponent } from './posts-drafts/posts-drafts.component';
import { PostsPublicComponent } from './posts-public/posts-public.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { SettingAccountComponent } from './setting-account/setting-account.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StudyRouteComponent } from './study-route/study-route.component';
import { StudyRouteBeComponent } from './study-route-be/study-route-be.component';
import { StudyRouteFeComponent } from './study-route-fe/study-route-fe.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { HomePageStComponent } from './home-page-st/home-page-st.component';
import { HomepageGvComponent } from './homepage-gv/homepage-gv.component';
import { HomepageUserComponent } from './homepage-user/homepage-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    AdminComponent,
    BlogComponent,
    BookmarkComponent,
    CourseComponent,
    KeepStudyComponent,
    LoginFormComponent,
    PostsDraftsComponent,
    PostsPublicComponent,
    ProfileComponent,
    SecurityComponent,
    SettingAccountComponent,
    SignupFormComponent,
    StudyRouteComponent,
    StudyRouteBeComponent,
    StudyRouteFeComponent,
    WriteBlogComponent,
    HomePageStComponent,
    HomepageGvComponent,
    HomepageUserComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
