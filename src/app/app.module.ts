import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/atoms/button/button.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ProgressComponent } from './components/atoms/progress/progress.component';
import { TextComponent } from './components/atoms/text/text.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { AddCourseFormComponent } from './components/organisms/add-course-form/add-course-form.component';
import { MessageCardComponent } from './components/molecules/message-card/message-card.component';
import { CoursesComponent } from './components/organisms/courses/courses.component';
import { CourseNameComponent } from './components/molecules/course-name/course-name.component';
import { CourseProgressComponent } from './components/molecules/course-progress/course-progress.component';
import { CourseLessonsComponent } from './components/molecules/course-lessons/course-lessons.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { courseReducer } from './store/course.Reducers';
import { CourseEffects } from './store/course.Effects';




@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconComponent,
    InputComponent,
    LinkComponent,
    LogoComponent,
    ProgressComponent,
    TextComponent,
    LabelComponent,
    MenuComponent,
    HeaderComponent,
    AddCourseFormComponent,
    MessageCardComponent,
    CoursesComponent,
    CourseNameComponent,
    CourseProgressComponent,
    CourseLessonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({course:courseReducer}, {}),
    EffectsModule.forRoot([CourseEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
