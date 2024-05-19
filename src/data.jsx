import SearchIcon from '@mui/icons-material/Search'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined'
import { Instagram, Google, Favorite, LocationOn, LocalAtm} from '@mui/icons-material'
export const navList = [
  { id: 1, list: 'Home' },
  { id: 2, list: 'About' },
  { id: 3, list: 'Contact' },
  { id: 4, list: 'Category' },
  { id: 5, list: 'Post a job' },
]

export const steps = [
  {
    id: 1,
    img: <SearchIcon />,
    title: 'Search Job',
    info: 'First you have to search job here',
    focus: 'bg-blue-400',
    color: 'text-blue-700',
    radiusColor: 'border-blue-700',
  },
  {
    id: 2,
    img: <CloudUploadIcon />,
    title: 'Cv/Resume',
    info: 'First you have to cv/resume upload here.',
    focus: 'bg-blue-400',
    color: 'text-rose-700',
    radiusColor: 'border-red-700',
  },
  {
    id: 3,
    img: <PersonOutlineIcon />,
    title: 'Create Account',
    info: 'First you have to create account here',
    focus: 'bg-blue-400',
    color: 'text-yellow-400',
    radiusColor: 'border-yellow-400',
  },
  {
    id: 4,
    img: <CheckCircleOutlinedIcon />,
    title: 'Apply to them',
    info: 'First you have to apply to all jobs here',
    focus: 'bg-blue-400',
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
    likeIcon: <Favorite />,
    // apply: 'Apply now',
    focus: 'bg-orange-400',
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
    likeIcon: <Favorite />,
    // apply: 'Apply now',
    focus: 'bg-violet-400',
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
    likeIcon: <Favorite />,
    // apply: 'Apply now',
    focus: 'bg-yellow-400',
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
    likeIcon: <Favorite />,
    // apply: 'Apply now',
    focus: 'bg-blue-400',
    color: 'bg-blue-700',
    borderColor: 'border-blue-500',
  },
]

export const testimonies = [
  {
    id: 1,
    img: '',
    name: 'Andrea Smith',
    span: 'One Year with Us',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia quia. Ipsa harum assumenda officiis.',
  },
  {
    id: 2,
    img: '',
    name: 'Andrew Mole',
    span: 'One Year with Us',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia quia. Ipsa harum assumenda officiis.',
  },
  {
    id: 3,
    img: '',
    name: 'Samantha chile',
    span: 'One Year with Us',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia quia. Ipsa harum assumenda officiis.',
  },
]
