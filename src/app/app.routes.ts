import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TcacComponent } from './pages/tcac/tcac.component';
import { OtherAnimalsComponent } from './pages/other-animals/other-animals.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { CatsComponent } from './pages/cats/cats.component';
import { AllAnimalsComponent } from './pages/all-animals/all-animals.component';
import { AdoptingPetsComponent } from './pages/adopting-pets/adopting-pets.component';
import { PageComponent } from './components/page/page.component';
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
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'adopting-pets',
                component: AdoptingPetsComponent,
                data: {
                    title: 'Adopting Your New Pet'
                }
            },
            {
                path: 'all-animals',
                component: AllAnimalsComponent,
                data: {
                    title: 'Other Animals for Adoption'
                }
            },
            {
                path: 'cats',
                component: CatsComponent,
                data: {
                    title: 'Cats for Adoption'
                }
            },
            {
                path: 'dogs',
                component: DogsComponent,
                data: {
                    title: 'Dogs for Adoption'
                }
            },
            {
                path: 'gifts',
                component: GiftsComponent,
                data: {
                    title: 'Making a Gift'
                }
            },
            {
                path: 'other-animals',
                component: OtherAnimalsComponent,
                data: {
                    title: 'All Animals for Adoption'
                }
            },
            {
                path: 'tcac',
                component: TcacComponent,
                data: {
                    title: 'Tompkins County Animal Control'
                }
            },
            {
                path: 'gifts',
                component: GiftsComponent,
                data: {
                    title: 'Making a Gift'
                }
            },
            {
                path: 'tiles',
                component: TilesComponent,
                data: {
                    title: 'Memorial and Tribute Tiles'
                }
            },
            {
                path: 'planned-giving',
                component: PlannedGivingComponent,
                data: {
                    title: 'Planned Giving'
                }
            },
            {
                path: 'needed-items',
                component: TilesComponent,
                data: {
                    title: 'Urgently Needed Items'
                }
            },
            {
                path: 'fundraisers',
                component: FundraisersComponent,
                data: {
                    title: 'Organize a Fundraiser'
                }
            },
            {
                path: 'other-help',
                component: OtherHelpComponent,
                data: {
                    title: 'Other Ways To Help'
                }
            },
            {
                path: 'businesses-that-care',
                component: BusinessesThatCareComponent,
                data: {
                    title: 'Businesses That Care'
                }
            },
            {
                path: 'lost-and-found',
                component: LostAndFoundComponent,
                data: {
                    title: 'Lost or Found Animals'
                }
            },
            {
                path: 'surrender-pet',
                component: SurrenderPetComponent,
                data: {
                    title: 'Surrendering a Pet'
                }
            },
            {
                path: 'spay-neuter',
                component: SurrenderPetComponent,
                data: {
                    title: 'Spay and Neuter Program'
                }
            },
            {
                path: 'education',
                component: EducationComponent,
                data: {
                    title: 'Humane and Youth Education'
                }
            },
            {
                path: 'classes',
                component: ClassesComponent,
                data: {
                    title: 'Training and Socialization Classes'
                }
            },
            {
                path: 'rabies-clinics',
                component: RabiesClinicsComponent,
                data: {
                    title: 'Free Rabies Clinics'
                }
            },
            {
                path: 'vet-care',
                component: VetCareComponent,
                data: {
                    title: 'Veterinary Care'
                }
            },
            {
                path: 'partners',
                component: PartnersComponent,
                data: {
                    title: 'Our Partners'
                }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    title: 'About Us'
                }
            },
            {
                path: 'staff',
                component: StaffComponent,
                data: {
                    title: 'Our Staff'
                }
            },
            {
                path: 'board',
                component: BoardComponent,
                data: {
                    title: 'Board of Directors'
                }
            },
            {
                path: 'jobs',
                component: JobsComponent,
                data: {
                    title: 'Job Openings'
                }
            },
            {
                path: 'stats',
                component: StatsComponent,
                data: {
                    title: 'Statistics'
                }
            },
            {
                path: 'volunteer',
                component: VolunteerComponent,
                data: {
                    title: 'Volunteer'
                }
            },
            {
                path: 'foster-family',
                component: FosterFamilyComponent,
                data: {
                    title: 'Foster an Animal'
                }
            },
            {
                path: 'community-service',
                component: CommunityServiceComponent,
                data: {
                    title: 'Community Service'
                }
            }
        ]
    }
];
