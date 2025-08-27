import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TcacComponent } from './pages/tcac/tcac.component';
import { OtherAnimalsComponent } from './pages/other-animals/other-animals.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { CatsComponent } from './pages/cats/cats.component';
import { AllAnimalsComponent } from './pages/all-animals/all-animals.component';
import { AdoptingPetsComponent } from './pages/adopting-pets/adopting-pets.component';
import { TilesComponent } from './pages/tiles/tiles.component';
import { PlannedGivingComponent } from './pages/planned-giving/planned-giving.component';
import { FundraisersComponent } from './pages/fundraisers/fundraisers.component';
import { OtherHelpComponent } from './pages/other-help/other-help.component';
import { BusinessesThatCareComponent } from './pages/businesses-that-care/businesses-that-care.component';
import { LostAndFoundComponent } from './pages/lost-and-found/lost-and-found.component';
import { SurrenderPetComponent } from './pages/surrender-pet/surrender-pet.component';
import { EducationComponent } from './pages/education/education.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { RabiesClinicsComponent } from './pages/rabies-clinics/rabies-clinics.component';
import { VetCareComponent } from './pages/vet-care/vet-care.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { CommunityServiceComponent } from './pages/community-service/community-service.component';
import { FosterFamilyComponent } from './pages/foster-family/foster-family.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { StatsComponent } from './pages/stats/stats.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { BoardComponent } from './pages/board/board.component';
import { StaffComponent } from './pages/staff/staff.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'adopting-pets',
        component: AdoptingPetsComponent
    },
    {
        path: 'other-animals',
        component: AllAnimalsComponent
    },
    {
        path: 'cats',
        component: CatsComponent
    },
    {
        path: 'dogs',
        component: DogsComponent
    },
    {
        path: 'gifts',
        component: GiftsComponent
    },
    {
        path: 'all-animals',
        component: OtherAnimalsComponent
    },
    {
        path: 'tcac',
        component: TcacComponent
    },
    {
        path: 'gifts',
        component: GiftsComponent
    },
    {
        path: 'tiles',
        component: TilesComponent
    },
    {
        path: 'planned-giving',
        component: PlannedGivingComponent
    },
    {
        path: 'needed-items',
        component: TilesComponent
    },
    {
        path: 'fundraisers',
        component: FundraisersComponent
    },
    {
        path: 'other-help',
        component: OtherHelpComponent
    },
    {
        path: 'businesses-that-care',
        component: BusinessesThatCareComponent
    },
    {
        path: 'lost-and-found',
        component: LostAndFoundComponent
    },
    {
        path: 'surrender-pet',
        component: SurrenderPetComponent
    },
    {
        path: 'spay-neuter',
        component: SurrenderPetComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'classes',
        component: ClassesComponent
    },
    {
        path: 'rabies-clinics',
        component: RabiesClinicsComponent
    },
    {
        path: 'vet-care',
        component: VetCareComponent
    },
    {
        path: 'partners',
        component: PartnersComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'board',
        component: BoardComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    },
    {
        path: 'stats',
        component: StatsComponent
    },
    {
        path: 'volunteer',
        component: VolunteerComponent
    },
    {
        path: 'foster-family',
        component: FosterFamilyComponent
    },
    {
        path: 'community-service',
        component: CommunityServiceComponent
    }
];
