import { Route, Router, RouterModule } from "@angular/router";
import { CoreListShellMainComponent } from "./containers";

const routes: Route[] = [
    {
        path: '',
        component: CoreListShellMainComponent,
        children: [],
    }
];

export const MultitabListShellMainRoutes = RouterModule.forChild(routes);
