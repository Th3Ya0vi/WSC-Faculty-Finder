import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data = [
    {
      name: 'Arneson, Patricia',
      dept: 'Business & Economics',
      phone: '7255',
      office: 'GH 206F',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 11:50am'
      }
    },
    {
      name: 'Bondhus, JoAnn',
      dept: 'Business & Economics',
      phone: '7412',
      office: 'GH 111B',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '2:00pm - 3:00pm'
      }
    },
    {
      name: 'Curnyn, Molly',
      dept: 'Computer Technology & Information Systems',
      phone: '7253',
      office: 'GH 206G',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      }
    },
    {
      name: 'Dendinger, Laura',
      dept: 'Business & Economics',
      phone: '7020',
      office: 'GH 111E',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '10:30am - 12:00pm	',
        tr: '1:45pm - 2:45pm',
        both: ''
      }
    },
    {
      name: 'Doctorman, Lindsey',
      dept: 'Business & Economics',
      phone: '7029',
      office: 'GH 111H',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '11:00am - 12:00pm',
        tr: '9:00am - 10:00am',
        both: ''
      }
    },
    {
      name: 'Garvin, Sharon',
      dept: 'Business & Economics',
      phone: '7233',
      office: 'GH 111A',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '12:00pm - 1:00pm',
        tr: '11:00am - 12:00pm',
        both: ''
      }
    },
    {
      name: 'Garvin, Tim',
      dept: 'Computer Technology & Information Systems',
      phone: '7545',
      office: 'GH 206J',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      }
    },
    {
      name: 'Johnson, Debbie',
      dept: 'Computer Technology & Information Systems',
      phone: '7254',
      office: 'GH 206H',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      }
    },
    {
      name: 'Kolterman, Trisha',
      dept: 'Business & Economics',
      phone: '7248',
      office: 'GH 111D',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '8:00am - 9:30am',
        tr: '2:00pm - 4:00pm',
        both: ''
      }
    },
    {
      name: 'Kufner, Brian',
      dept: 'Business & Economics',
      phone: '7479',
      office: 'GH 206E',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 11:00am'
      }
    },
    {
      name: 'Lutt, Pat',
      dept: 'Business & Economics',
      phone: '7250',
      office: 'GH 111J',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '8:00am - 8:50am',
        tr: '8:15am - 9:15am',
        both: ''
      }
    },
    {
      name: 'McLaughlin, Lindsay',
      dept: 'Business & Economics',
      phone: '7022',
      office: 'GH 111G',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '9:00am - 10:00am',
        tr: '9:00am - 11:00am',
        both: ''
      }
    },
    {
      name: 'Nelson, Jeryl',
      dept: 'Business & Economics',
      phone: '7251',
      office: 'GH 206B',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: 'MWF: 9:00am - 9:50am and MW: 11:00am - 11:50am'
      }
    },
    {
      name: 'Nicholson, Lori',
      dept: 'Computer Technology & Information Systems',
      phone: '7071',
      office: 'GH 206K',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 10:50am	'
      }
    },
    {
      name: 'Parker, Chuck',
      dept: 'Business & Economics',
      phone: '7036',
      office: 'GH 111K',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 11:00am	R: 1:45pm - 3:45pm'
      }
    },
    {
      name: 'Parker, Karen',
      dept: 'Business & Economics',
      phone: '7245',
      office: 'GH 106',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: 'By appointment only'
      }
    },
    {
      name: 'Pulfer, Jodi',
      dept: 'Business & Economics',
      phone: '7021',
      office: 'GH 111C',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '',
        tr: '',
        both: '9:30am - 10:30am	'
      }
    },
    {
      name: 'Ras, Gerard',
      dept: 'Business & Economics',
      phone: '7464',
      office: 'GH 206D',
      class:{
        mmw: 'Information MGMT',
        TR: '9am'


      },
      time: {
        mmw: '11:00am - 11:50am',
        tr: '8:30am - 9:20am',
        both: ''
      }
    },

  ]


  findTecherByName(name) {
    return this.data.find(x => x.name === name);
  }
}
