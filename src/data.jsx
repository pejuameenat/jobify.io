import SearchIcon from '@mui/icons-material/Search'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined'
import {
  Instagram,
  Google,
  Favorite,
  LocationOn,
  LocalAtm,
} from '@mui/icons-material'
import img1 from './assets/team0.jpg'
import img2 from './assets/team2.jpg'
import img3 from './assets/team4.jpg'

export const navList = [
  { id: 1, list: 'Home', href: '#home' },
  { id: 2, list: 'About', href: '#about' },
  { id: 3, list: 'Contact', href: '#help' },
  { id: 4, list: 'Category', href: '#category' },
  { id: 5, list: 'Post a job', href: '#Post a job' },
]

export const steps = [
  {
    id: 1,
    img: <SearchIcon />,
    title: 'Search Job',
    info: 'First you have to search job here',
    color: 'text-blue-700',
    radiusColor: 'border-blue-700',
  },
  {
    id: 2,
    img: <CloudUploadIcon />,
    title: 'Cv/Resume',
    info: 'First you have to cv/resume upload here.',
    color: 'text-rose-700',
    radiusColor: 'border-red-700',
  },
  {
    id: 3,
    img: <PersonOutlineIcon />,
    title: 'Create Account',
    info: 'First you have to create account here',
    color: 'text-yellow-400',
    radiusColor: 'border-yellow-400',
  },
  {
    id: 4,
    img: <CheckCircleOutlinedIcon />,
    title: 'Apply to them',
    info: 'First you have to apply to all jobs here',
    color: 'text-violet-700',
    radiusColor: 'border-violet-700',
  },
]
export const help = [
  {
    id: 1,
    img: <MovingOutlinedIcon />,
    title: 'Enhance Your Career ',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloremque assumenda quibusdam praesentium suscipit illo!',
    bgColor: 'bg-red-700',
  },
  {
    id: 2,
    img: <TextsmsOutlinedIcon />,
    title: 'Communicate With Others',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloremque assumenda quibusdam praesentium suscipit illo!',
    bgColor: 'bg-blue-700',
  },
  {
    id: 3,
    img: <AddTaskOutlinedIcon />,
    title: 'Find jobs with good Career',
    info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et doloremque assumenda quibusdam praesentium suscipit illo!',
    bgColor: 'bg-yellow-500',
  },
]

export const offers = [
  {
    id: 1,
    icon: <Google />,
    title: 'Database Programmer',
    span: 'ACD Limited',
    cashIcon: <LocalAtm />,
    contact: '123-456-789-0 /Monthly',
    locationIcon: <LocationOn />,
    location: 'Uk, London',
    color: 'bg-orange-600',
    borderColor: 'border-orange-400',
  },
  {
    id: 2,
    title: 'Graphic Designer',
    icon: '',
    span: 'ACD Limited',
    cashIcon: <LocalAtm />,
    contact: '123-456-789-0 /Monthly',
    locationIcon: <LocationOn />,
    location: 'Liberia, Mauritius.',
    color: 'bg-violet-700',
    borderColor: 'border-violet-500',
  },
  {
    id: 3,
    icon: <Instagram />,
    title: 'UI/UX Designer',
    span: 'ACD Limited',
    cashIcon: <LocalAtm />,
    contact: '123-456-789-0 /Monthly',
    locationIcon: <LocationOn />,
    location: 'USA, Texas',
    color: 'bg-yellow-400',
    borderColor: 'border-yellow-400',
  },
  {
    id: 4,
    icon: '',
    title: 'Web Developer',
    span: 'ACD Limited',
    cashIcon: <LocalAtm />,
    contact: '123-456-789-0 /Monthly',
    locationIcon: <LocationOn />,
    location: 'Pakistan, Bangladesh',
    color: 'bg-blue-700',
    borderColor: 'border-blue-500',
  },
]

export const testimonies = [
  {
    id: 1,
    img: img1,
    name: 'Andrea Smith',
    span: 'One Year with Us',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia quia. Ipsa harum assumenda officiis.',
  },
  {
    id: 2,
    img: img2,
    name: 'Andrew Mole',
    span: 'One Year with Us',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia quia. Ipsa harum assumenda officiis.',
  },
  {
    id: 3,
    img: img3,
    name: 'Samantha chile',
    span: 'One Year with Us',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia quia. Ipsa harum assumenda officiis.',
  },
]

 export const footerList = [
   {
     id: 1,
     h5: 'ABOUT US',
     list1: 'Media Center',
     list2: 'Career',
     list3: 'Investors',
     list4: 'Policies',
   },
   {
     id: 2,
     h5: 'NEED HELP?',
     list1: 'FAQ',
     list2: 'Contact Us',
     list3: 'International',
   },
   {
     id: 3,
     h5: 'California Notice at Collection',
     list1: 'Do Not Sell My Personal Information',
     list2: 'Terms of Use',
     list3: 'Privacy Policy',
     list4: 'Cookies Settings',
   },
 ]
