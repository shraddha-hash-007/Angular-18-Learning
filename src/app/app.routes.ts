import { Routes } from '@angular/router';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { EmpDetailsComponent } from '../components/emp-details/emp-details.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from '../components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '../components/directive/attribute-directive/attribute-directive.component';
import { CfIfelseComponent } from '../components/control-flow/cf-ifelse/cf-ifelse.component';
import { CfForComponent } from '../components/control-flow/cf-for/cf-for.component';
import { MyPipeComponent } from '../components/pipe/my-pipe/my-pipe.component';
import { TemplateEmpFormComponent } from '../components/forms/template-emp-form/template-emp-form.component';
import { ReactiveEmpFormComponent } from '../components/forms/reactive-emp-form/reactive-emp-form.component';
import { GetIntegrationComponent } from '../components/Api-integration/get-integration/get-integration/get-integration.component';
import { PostIntegrationComponent } from '../components/Api-integration/post-integration/post-integration/post-integration.component';
import { ServiceIntegrationComponent } from '../components/Api-integration/ApiIntegrationWithService/post-integration/service-integration.component';
import { LifeCycleEventComponent } from '../components/life-cycle-event/life-cycle-event.component';
import { NgTemplateComponent } from '../components/ng-template/ng-template.component';
import { NgContainerComponent } from '../components/ng-container/ng-container/ng-container.component';
import { ViewChildComponent } from '../components/view-child/view-child/view-child.component';
import { LoginComponent } from '../components/login/login.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'add-emp',
                component: AddEmployeeComponent
            },
            {
                path: 'emp-details',
                component: EmpDetailsComponent
            },
            {
                path: 'data-binding',
                component: DataBindingComponent
            },
            {
                path: 'if-directive',
                component: StructuralDirectiveComponent
            },
            {
                path: 'attribute-directive',
                component: AttributeDirectiveComponent
            },
            {
                path: 'cf-ng-if',
                component: CfIfelseComponent
            },
            {
                path: 'cf-for',
                component: CfForComponent
            },
            {
                path: 'pipe',
                component: MyPipeComponent
            },
            {
                path: 'tForm',
                component: TemplateEmpFormComponent
            },
            {
                path: 'rForm',
                component: ReactiveEmpFormComponent
            },
            {
                path: 'getAPI',
                component: GetIntegrationComponent
            },
            {
                path: 'postAPI',
                component: PostIntegrationComponent
            },
            {
                path: 'apiCallWithService',
                component: ServiceIntegrationComponent
            },
            {
                path: 'lifeCycle',
                component: LifeCycleEventComponent
            },
            {
                path: 'ng-template',
                component: NgTemplateComponent
            },
            {
                path: 'ng-container',
                component: NgContainerComponent
            },
            {
                path: 'view-child',
                component: ViewChildComponent
            }

        ]

    }




];
