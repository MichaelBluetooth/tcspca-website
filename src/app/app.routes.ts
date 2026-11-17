import { Route } from '@angular/router';
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
import { SpayNeuterComponent } from './pages/spay-neuter/spay-neuter.component';
import { EducationComponent } from './pages/education/education.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { RabiesClinicsComponent } from './pages/rabies-clinics/rabies-clinics.component';
import { VetCareComponent } from './pages/vet-care/vet-care.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { FosterFamilyComponent } from './pages/foster-family/foster-family.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { StatsComponent } from './pages/stats/stats.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { BoardComponent } from './pages/board/board.component';
import { StaffComponent } from './pages/staff/staff.component';
import { AboutComponent } from './pages/about/about.component';
import { NeededItemsComponent } from './pages/needed-items/needed-items.component';

type PageRoute = Route & { title: string; data: { description: string } };

export const routes: PageRoute[] = [
    {
        path: '',
        component: HomeComponent,
        title: 'SPCA of Tompkins County',
        data: { description: 'Find adoptable pets, animal services, and ways to support the SPCA of Tompkins County in Ithaca, New York.' }
    },
    {
        path: 'adopting-pets',
        component: AdoptingPetsComponent,
        title: 'Adopting Your New Pet | SPCA of Tompkins County',
        data: { description: 'Learn how to adopt from the SPCA of Tompkins County, including adoption fees and what comes with your new pet.' }
    },
    {
        path: 'other-animals',
        component: OtherAnimalsComponent,
        title: 'Other Animals for Adoption | SPCA of Tompkins County',
        data: { description: 'Browse small animals and other pets available for adoption at the SPCA of Tompkins County.' }
    },
    {
        path: 'cats',
        component: CatsComponent,
        title: 'Cats for Adoption | SPCA of Tompkins County',
        data: { description: 'Meet cats and kittens available for adoption at the SPCA of Tompkins County and find out how to contact the adoption team.' }
    },
    {
        path: 'dogs',
        component: DogsComponent,
        title: 'Dogs for Adoption | SPCA of Tompkins County',
        data: { description: 'Meet dogs and puppies available for adoption at the SPCA of Tompkins County and find out how to contact the adoption team.' }
    },
    {
        path: 'gifts',
        component: GiftsComponent,
        title: 'Making a Gift | SPCA of Tompkins County',
        data: { description: 'Donate to the SPCA of Tompkins County to help provide daily care and medical treatment for local shelter animals.' }
    },
    {
        path: 'all-animals',
        component: AllAnimalsComponent,
        title: 'All Animals for Adoption | SPCA of Tompkins County',
        data: { description: 'Browse all animals available for adoption at the SPCA of Tompkins County, including cats, dogs, and small pets.' }
    },
    {
        path: 'tcac',
        component: TcacComponent,
        title: 'Tompkins County Animal Control | SPCA of Tompkins County',
        data: { description: 'Find Tompkins County Animal Control contacts by municipality and learn how to report stray dogs or suspected animal cruelty.' }
    },
    {
        path: 'tiles',
        component: TilesComponent,
        title: 'Memorial and Tribute Tiles | SPCA of Tompkins County',
        data: { description: 'Honor a loved one or pet with an inscribed memorial or tribute tile at the SPCA of Tompkins County adoption center.' }
    },
    {
        path: 'planned-giving',
        component: PlannedGivingComponent,
        title: 'Planned Giving | SPCA of Tompkins County',
        data: { description: 'Learn how to support the SPCA of Tompkins County through a will, living trust, or beneficiary designation.' }
    },
    {
        path: 'needed-items',
        component: NeededItemsComponent,
        title: 'Urgently Needed Items | SPCA of Tompkins County',
        data: { description: 'See which supplies the SPCA of Tompkins County needs for its shelter animals and where to drop off donations.' }
    },
    {
        path: 'fundraisers',
        component: FundraisersComponent,
        title: 'Organize a Fundraiser | SPCA of Tompkins County',
        data: { description: 'Get guidelines for organizing a community fundraiser to benefit animals at the SPCA of Tompkins County.' }
    },
    {
        path: 'other-help',
        component: OtherHelpComponent,
        title: 'Other Ways To Help | SPCA of Tompkins County',
        data: { description: 'Explore ways to support the SPCA of Tompkins County, including donating redeemable bottles and cans or giving a vehicle.' }
    },
    {
        path: 'businesses-that-care',
        component: BusinessesThatCareComponent,
        title: 'Businesses That Care | SPCA of Tompkins County',
        data: { description: 'Meet the businesses whose sponsorship helps the SPCA of Tompkins County care for shelter animals.' }
    },
    {
        path: 'lost-and-found',
        component: LostAndFoundComponent,
        title: 'Lost or Found Animals | SPCA of Tompkins County',
        data: { description: 'Find out whom to contact when a pet goes missing or you find a stray animal in Tompkins County.' }
    },
    {
        path: 'surrender-pet',
        component: SurrenderPetComponent,
        title: 'Surrendering a Pet | SPCA of Tompkins County',
        data: { description: 'Learn how to contact the SPCA of Tompkins County about surrendering a pet and arranging an intake appointment.' }
    },
    {
        path: 'spay-neuter',
        component: SpayNeuterComponent,
        title: 'Spay and Neuter Program | SPCA of Tompkins County',
        data: { description: 'Learn about eligibility and how to apply for low-cost spay and neuter services for cats and dogs through the SPCA of Tompkins County.' }
    },
    {
        path: 'education',
        component: EducationComponent,
        title: 'Humane and Youth Education | SPCA of Tompkins County',
        data: { description: 'Find updates on humane education for schools, libraries, scout troops, and community groups from the SPCA of Tompkins County.' }
    },
    {
        path: 'classes',
        component: ClassesComponent,
        title: 'Training and Socialization Classes | SPCA of Tompkins County',
        data: { description: 'Check the status of pet training and socialization classes at the SPCA of Tompkins County.' }
    },
    {
        path: 'rabies-clinics',
        component: RabiesClinicsComponent,
        title: 'Free Rabies Clinics | SPCA of Tompkins County',
        data: { description: 'Find information about free rabies vaccination clinics for dogs, cats, and ferrets in Tompkins County.' }
    },
    {
        path: 'vet-care',
        component: VetCareComponent,
        title: 'Veterinary Care | SPCA of Tompkins County',
        data: { description: 'Find veterinary care resources for pet owners in Tompkins County, including emergency care and help with costs.' }
    },
    {
        path: 'partners',
        component: PartnersComponent,
        title: 'Our Partners | SPCA of Tompkins County',
        data: { description: 'Explore the local and national organizations that partner with the SPCA of Tompkins County to protect companion animals.' }
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us | SPCA of Tompkins County',
        data: { description: 'Learn about the history and mission of the SPCA of Tompkins County and its work protecting companion animals.' }
    },
    {
        path: 'staff',
        component: StaffComponent,
        title: 'Staff | SPCA of Tompkins County',
        data: { description: 'Meet the staff who care for animals and lead programs at the SPCA of Tompkins County.' }
    },
    {
        path: 'board',
        component: BoardComponent,
        title: 'Board of Directors | SPCA of Tompkins County',
        data: { description: 'Meet the volunteer Board of Directors that guides the mission, finances, and long-term planning of the SPCA of Tompkins County.' }
    },
    {
        path: 'jobs',
        component: JobsComponent,
        title: 'Job Openings | SPCA of Tompkins County',
        data: { description: 'Check for current job openings at the SPCA of Tompkins County.' }
    },
    {
        path: 'stats',
        component: StatsComponent,
        title: 'Statistics | SPCA of Tompkins County',
        data: { description: 'Explore shelter statistics from the SPCA of Tompkins County and learn how the data informs animal care.' }
    },
    {
        path: 'volunteer',
        component: VolunteerComponent,
        title: 'Volunteer | SPCA of Tompkins County',
        data: { description: 'Explore volunteer roles, age and training requirements, and how to apply at the SPCA of Tompkins County.' }
    },
    {
        path: 'foster-family',
        component: FosterFamilyComponent,
        title: 'Foster an Animal | SPCA of Tompkins County',
        data: { description: 'Learn how to become a foster family and provide a temporary home for cats, dogs, kittens, or puppies awaiting adoption.' }
    }
];
