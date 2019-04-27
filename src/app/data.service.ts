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
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 11:50am'
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '214',
          Sec: '0001',
          CourseTitle: 'INFORMATION MGMT',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-215',

        },
        {
          Sub: 'BUS',
          Crs: '307',
          Sec: '0001',
          CourseTitle: 'OFFICE SYS & TECH',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-211',

        },
        {
          Sub: 'BUS',
          Crs: '335',
          Sec: '0001',
          CourseTitle: 'REAL ESTATE/BROKRG',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-208',

        },
        {
          Sub: 'BUS',
          Crs: '367',
          Sec: '0001',
          CourseTitle: 'FOUNDNS/HRM',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-115',

        }
      ]
    },
    {
      name: 'Bondhus, JoAnn',
      dept: 'Business & Economics',
      phone: '7412',
      office: 'GH 111B',
      time: {
        mmw: '',
        tr: '',
        both: '2:00pm - 3:00pm'
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '222',
          Sec: '0001',
          CourseTitle: 'BUS LAW 1',
          Days: 'MWF',
          Start: '1300',
          Stop: '1350',
          Room: 'GH-110',

        },
        {
          Sub: 'BUS',
          Crs: '223',
          Sec: '0001',
          CourseTitle: 'BUS LAW 2',
          Days: 'TR',
          Start: '1230',
          Stop: '1345',
          Room: 'GH-208',

        },
        {
          Sub: 'BUS',
          Crs: '418',
          Sec: '0001',
          CourseTitle: 'LEGAL ENVRMNT OF BUS',
          Days: 'MWF',
          Start: '1100',
          Stop: '1150',
          Room: 'GH-115',

        },
        {
          Sub: 'BUS',
          Crs: '418',
          Sec: '0002',
          CourseTitle: 'LEGAL ENVRMNT OF BUS',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-115',

        },
        {
          Sub: 'BUS',
          Crs: '445',
          Sec: '0001',
          CourseTitle: 'FED TAX ACCTG I',
          Days: 'MWF',
          Start: '1100',
          Stop: '1215',
          Room: 'GH-208',

        }
      ]
    },
    {
      name: 'Curnyn, Molly',
      dept: 'Computer Technology & Information Systems',
      phone: '7253',
      office: 'GH 206G',
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      },
      classSchedule: [
        {
          Sub: 'CIS',
          Crs: '140',
          Sec: '0001',
          CourseTitle: 'INTRO MICROCMPT OS',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-212',

        },
        {
          Sub: 'CIS',
          Crs: '140',
          Sec: '0002',
          CourseTitle: 'INTRO MICROCMPT OS',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-212',

        },
        {
          Sub: 'CIS',
          Crs: '430/530',
          Sec: '00W0',
          CourseTitle: 'MGMT INFO SYSTEMS',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'CSC',
          Crs: '165',
          Sec: '0001',
          CourseTitle: 'INTRO TO WEB DVPMNT',
          Days: 'TR',
          Start: '1230',
          Stop: '1345',
          Room: 'CT-207',

        },
        {
          Sub: 'CSC',
          Crs: '178',
          Sec: '0001',
          CourseTitle: 'INTRO TO ROBOTICS',
          Days: 'MW',
          Start: '1400',
          Stop: '1515',
          Room: 'CT-208',

        },
        {
          Sub: 'CSC',
          Crs: '378',
          Sec: '0001',
          CourseTitle: 'ROBOTICS',
          Days: 'MW',
          Start: '1400',
          Stop: '1515',
          Room: 'CT-208',

        },
        {
          Sub: 'CSC',
          Crs: '465',
          Sec: '0001',
          CourseTitle: 'ADV WEB DVPMNT',
          Days: 'TR',
          Start: '1400',
          Stop: '1515',
          Room: 'CT-207',

        }
      ]
    },
    {
      name: 'Dendinger, Laura',
      dept: 'Business & Economics',
      phone: '7020',
      office: 'GH 111E',
      time: {
        mmw: '10:30am - 12:00pm	',
        tr: '1:45pm - 2:45pm',
        both: ''
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '208',
          Sec: '0001',
          CourseTitle: 'BUS COMMUNICATIONS',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-208',

        },
        {
          Sub: 'BUS',
          Crs: '408',
          Sec: '0001',
          CourseTitle: 'BUSINESS ETHICS',
          Days: 'TR',
          Start: '1230',
          Stop: '1345',
          Room: 'GH-110',

        },
        {
          Sub: 'BUS',
          Crs: '620',
          Sec: '00W0',
          CourseTitle: 'MANAGERIAL COMM',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'BUS',
          Crs: '628',
          Sec: '00W0',
          CourseTitle: 'DISPUTE RESOLUTION MGT',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        }
      ]
    },
    {
      name: 'Doctorman, Lindsey',
      dept: 'Business & Economics',
      phone: '7029',
      office: 'GH 111H',
      time: {
        mmw: '11:00am - 12:00pm',
        tr: '9:00am - 10:00am',
        both: ''
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '262',
          Sec: '0001',
          CourseTitle: 'IINTERNATIONAL BUSINESS',
          Days: 'MWF',
          Start: '1300',
          Stop: '1350',
          Room: 'GH-108',

        },
        {
          Sub: 'BUS',
          Crs: '262',
          Sec: '0002',
          CourseTitle: 'INTERNATIONAL BUSINESS',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-108',

        },
        {
          Sub: 'BUS',
          Crs: '650',
          Sec: '00W0',
          CourseTitle: 'MANAGERIAL ECONOMICS',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'ECO',
          Crs: '203',
          Sec: '0001',
          CourseTitle: 'FPRIN/MICROECONOMICS',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-108',

        },
        {
          Sub: 'ECO',
          Crs: '203',
          Sec: '00W0',
          CourseTitle: 'FPRIN/MICROECONOMICS',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'ECO',
          Crs: '365',
          Sec: '0001',
          CourseTitle: 'ECON OF AG',
          Days: 'TR',
          Start: '1100',
          Stop: '1215',
          Room: 'GH-115',

        }
      ]
    },
    {
      name: 'Garvin, Sharon',
      dept: 'Business & Economics',
      phone: '7233',
      office: 'GH 111A',
      time: {
        mmw: '12:00pm - 1:00pm',
        tr: '11:00am - 12:00pm',
        both: ''
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '240',
          Sec: '0001',
          CourseTitle: 'ACCOUNTING I',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-110',

        },
        {
          Sub: 'BUS',
          Crs: '241',
          Sec: '0001',
          CourseTitle: 'ACCOUNTING 2',
          Days: 'TR',
          Start: '0800',
          Stop: '0915',
          Room: 'GH-103',

        },
        {
          Sub: 'BUS',
          Crs: '344',
          Sec: '0001',
          CourseTitle: 'FINANCIAL ACCTG/ANLYSIS',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '348',
          Sec: '0001',
          CourseTitle: 'EXTRNL FINANCL REPRTG',
          Days: 'MWF',
          Start: '1100',
          Stop: '1150',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '449',
          Sec: '00W0',
          CourseTitle: 'RISK ANLYS/ACCTG',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'BUS',
          Crs: '652',
          Sec: '00W0',
          CourseTitle: 'MGMT ACCOUNTING',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        }
      ]
    },
    {
      name: 'Garvin, Tim',
      dept: 'Computer Technology & Information Systems',
      phone: '7545',
      office: 'GH 206J',
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      },
      classSchedule: [
        {
          Sub: 'CIS',
          Crs: '361',
          Sec: '00H0',
          CourseTitle: 'CIS:DESIGN/IMPL/EVAL',
          Days: 'MW',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-214',

        },
        {
          Sub: 'CIS',
          Crs: '430/530',
          Sec: '0001',
          CourseTitle: 'MGMT INFO SYSTEMS',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-2154',

        },
        {
          Sub: 'CIS',
          Crs: '477/577',
          Sec: '0001',
          CourseTitle: 'PROJECT MANAGEMENT',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-214',

        },
        {
          Sub: 'CIS',
          Crs: '480/580',
          Sec: '0001',
          CourseTitle: 'SEM/CMPTR INFO SYSTEMS',
          Days: 'W',
          Start: '1400',
          Stop: '1645',
          Room: 'GH-115',

        }
      ]
    },
    {
      name: 'Johnson, Debbie',
      dept: 'Computer Technology & Information Systems',
      phone: '7254',
      office: 'GH 206H',
      time: {
        mmw: '',
        tr: '',
        both: '11:00am - 12:00pm'
      },
      classSchedule: [
        {
          Sub: 'CIS',
          Crs: '366',
          Sec: '0001',
          CourseTitle: 'INTRO DATA BASE',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-211',

        },
        {
          Sub: 'CIS',
          Crs: '160',
          Sec: '0001',
          CourseTitle: 'PROGRMMNG FUND II',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-207',

        },
        {
          Sub: 'CIS',
          Crs: '160',
          Sec: '0002',
          CourseTitle: 'PROGRMMNG FUND II',
          Days: 'MWF',
          Start: '1300',
          Stop: '1350',
          Room: 'GH-207',

        },
        {
          Sub: 'CIS',
          Crs: '160',
          Sec: '0003',
          CourseTitle: 'PROGRMMNG FUND II',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-207',

        }
      ]
    },
    {
      name: 'Kolterman, Trisha',
      dept: 'Business & Economics',
      phone: '7248',
      office: 'GH 111D',
      time: {
        mmw: '8:00am - 9:30am',
        tr: '2:00pm - 4:00pm',
        both: ''
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '112',
          Sec: '0001',
          CourseTitle: 'PRSNL FIN IN MODRN SOC',
          Days: 'MWF',
          Start: '1300',
          Stop: '1350',
          Room: 'GH-115',

        },
        {
          Sub: 'BUS',
          Crs: '226',
          Sec: '0001',
          CourseTitle: 'BUS STATISTICS',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-115',

        },
        {
          Sub: 'BUS',
          Crs: '226',
          Sec: '0002',
          CourseTitle: 'BUS STATISTICS',
          Days: 'TR',
          Start: '1230',
          Stop: '1345',
          Room: 'GH-115',


        },
        {
          Sub: 'BUS',
          Crs: '260',
          Sec: '0001',
          CourseTitle: 'MGMT THRY/PRACTICE',
          Days: 'MWF',
          Start: '1100',
          Stop: '1150',
          Room: 'GH-114',

        },
        {
          Sub: 'BUS',
          Crs: '260',
          Sec: '0002',
          CourseTitle: 'MGMT THRY/PRACTICE',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-114',

        }
      ]
    },
    {
      name: 'Kufner, Brian',
      dept: 'Business & Economics',
      phone: '7479',
      office: 'GH 206E',
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 11:00am'
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '452',
          Sec: '00W0',
          CourseTitle: 'HR DEVLPMT',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'BUS',
          Crs: '452',
          Sec: '00W1',
          CourseTitle: 'HR DEVLPMT',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'BUS',
          Crs: '455',
          Sec: '00W0',
          CourseTitle: 'EMPLOYMT LAW/LABOR',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'BUS',
          Crs: '455',
          Sec: '00W1',
          CourseTitle: 'EMPLOYMT LAW/LABOR',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '456',
          Sec: '00W1',
          CourseTitle: 'STRATEGIC HRM',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '552',
          Sec: '00W1',
          CourseTitle: 'HR DEVELPMT',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '555',
          Sec: '00W1',
          CourseTitle: 'EMPLOYMT LAW/LABOR',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '556',
          Sec: '00W1',
          CourseTitle: 'STRATEGIC HRM',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '690',
          Sec: '00W1',
          CourseTitle: 'SEMINAR/ORG BEHAVIOR',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        }
      ]
    },
    {
      name: 'Lutt, Pat',
      dept: 'Business & Economics',
      phone: '7250',
      office: 'GH 111J',
      time: {
        mmw: '8:00am - 8:50am',
        tr: '8:15am - 9:15am',
        both: ''
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '270',
          Sec: '0002',
          CourseTitle: 'PRIN OF MARKETING',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-114',

        },
        {
          Sub: 'BUS',
          Crs: '3560',
          Sec: '0001',
          CourseTitle: 'MBO',
          Days: 'MWF',
          Start: '1100',
          Stop: '1215',
          Room: 'GH-108',

        },
        {
          Sub: 'BUS',
          Crs: '372',
          Sec: '0001',
          CourseTitle: 'SELLING & SALES MGT',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-114',

        },
        {
          Sub: 'BUS',
          Crs: '270',
          Sec: '0001',
          CourseTitle: 'PRIN OF MARKETING',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-114',

        },
      ]
    },
    {
      name: 'McLaughlin, Lindsay',
      dept: 'Business & Economics',
      phone: '7022',
      office: 'GH 111G',
      time: {
        mmw: '9:00am - 10:00am',
        tr: '9:00am - 11:00am',
        both: ''
      },
      classSchedule: [
        {
            Sub: 'BUS',
            Crs: '270',
            Sec: '00W0',
            CourseTitle: 'PRIN OF MARKETING',
            Days: 'TBA',
            Start: '',
            Stop: '',
            Room: 'ONLINE',
        },
        {
            Sub: 'BUS',
            Crs: '270',
            Sec: '00W1',
            CourseTitle: 'PRIN OF MARKETING',
            Days: 'TBA',
            Start: '',
            Stop: '',
            Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '374',
          Sec: '0001',
          CourseTitle: 'ADVERTISNG',
          Days: 'TBA',
          Start: '1100',
          Stop: '1215',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '470',
          Sec: '0001',
          CourseTitle: 'MARKETING MGMT',
          Days: 'MWF',
          Start: '1100',
          Stop: '1150',
          Room: 'GH-110',

        },
        {
          Sub: 'BUS',
          Crs: '480',
          Sec: 'SS80',
          CourseTitle: 'BUSINESS RESEARCH',
          Days: 'M',
          Start: '1600',
          Stop: '1845',
          Room: 'CC-224',

        },
        {
          Sub: 'BUS',
          Crs: '656',
          Sec: '00W0',
          CourseTitle: 'MARKETING ADMIN',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        }
      ]
    },
    {
      name: 'Nelson, Jeryl',
      dept: 'Business & Economics',
      phone: '7251',
      office: 'GH 206B',
      time: {
        mmw: '',
        tr: '',
        both: 'MWF: 9:00am - 9:50am and MW: 11:00am - 11:50am'
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '352',
          Sec: '0001',
          CourseTitle: 'OPS & SUPPLY CHAIN',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '420',
          Sec: '0001',
          CourseTitle: 'STRATEGIC MANAGEMENT',
          Days: 'MWF',
          Start: '0800',
          Stop: '0850',
          Room: 'GH-108',

        },
        {
          Sub: 'BUS',
          Crs: '424',
          Sec: '0001',
          CourseTitle: 'INVESTMENTS',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '424',
          Sec: 'SS80',
          CourseTitle: 'INVESTMENTS',
          Days: 'R',
          Start: '1600',
          Stop: '1845',
          Room: 'CC-224',

        },
        {
          Sub: 'BUS',
          Crs: '692',
          Sec: '00W0',
          CourseTitle: 'ADMINISTRATIVE POLICY',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        }
      ]
    },
    {
      name: 'Nicholson, Lori',
      dept: 'Computer Technology & Information Systems',
      phone: '7071',
      office: 'GH 206K',
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 10:50am	'
      },
      classSchedule: [
        {
          Sub: 'CIS',
          Crs: '271',
          Sec: '0001',
          CourseTitle: 'NETWORKING II',
          Days: 'TR',
          Start: '1400',
          Stop: '1515',
          Room: 'CT-203',

        },
        {
          Sub: 'CIS',
          Crs: '471',
          Sec: '0001',
          CourseTitle: 'NETWORKING IV',
          Days: 'TR',
          Start: '1530',
          Stop: '1645',
          Room: 'CT-203',

        },
        {
          Sub: 'CIS',
          Crs: '479',
          Sec: '00W0',
          CourseTitle: 'NETWORK DESIGN/ADMIN',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'CSC',
          Crs: '320',
          Sec: '0001',
          CourseTitle: 'COMPTR ORG/ARCHITECTR',
          Days: 'MWF',
          Start: '1100',
          Stop: '1150',
          Room: 'CT-207',

        },
        {
          Sub: 'CSC',
          Crs: '345',
          Sec: '0001',
          CourseTitle: 'COMPUTER GRAPHICS',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'CT-207',

        },
        {
          Sub: 'CSC',
          Crs: '450',
          Sec: '0001',
          CourseTitle: 'SERVER SECURITY/MGT',
          Days: 'TR',
          Start: '1100',
          Stop: '1215',
          Room: 'CT-203',

        }
      ]
    },
    {
      name: 'Parker, Chuck',
      dept: 'Business & Economics',
      phone: '7036',
      office: 'GH 111K',
      time: {
        mmw: '',
        tr: '',
        both: '10:00am - 11:00am	R: 1:45pm - 3:45pm'
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '625',
          Sec: '00W0',
          CourseTitle: 'DECISION SCIENCE',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'ECO',
          Crs: '202',
          Sec: '0001',
          CourseTitle: 'PRIN/MACROECONOMICS',
          Days: 'MWF',
          Start: '1100',
          Stop: '1150',
          Room: 'GH-108',

        },
        {
          Sub: 'ECO',
          Crs: '202',
          Sec: '0002',
          CourseTitle: 'PRIN/MACROECONOMICS',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-108',

        },
        {
          Sub: 'ECO',
          Crs: '305',
          Sec: '0001',
          CourseTitle: 'ECON FOR MANAGERS',
          Days: 'TR',
          Start: '1230',
          Stop: '1345',
          Room: 'GH-108',

        },
        {
          Sub: 'ECO',
          Crs: '305',
          Sec: 'OOW0',
          CourseTitle: 'ECON FOR MANAGERS',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'ECO',
          Crs: '305',
          Sec: 'SS80',
          CourseTitle: 'ECON FOR MANAGERS',
          Days: 'T',
          Start: '1600',
          Stop: '1845',
          Room: 'CC-225',

        },
        {
          Sub: 'ECO',
          Crs: '310',
          Sec: '0001',
          CourseTitle: 'MONEY AND BANKING',
          Days: 'TR',
          Start: '0800',
          Stop: '0915',
          Room: 'GH-108',

        }
      ]
    },
    {
      name: 'Parker, Karen',
      dept: 'Business & Economics',
      phone: '7245',
      office: 'GH 106',
      time: {
        mmw: '',
        tr: '',
        both: 'By appointment only'
      },
      classSchedule: [
        {
          Sub: 'CIS',
          Crs: '130',
          Sec: '00W0',
          CourseTitle: 'INTRO COMP/INFO TECH',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'CIS',
          Crs: '231',
          Sec: '0001',
          CourseTitle: 'MICROCMPTR SOFTWARE',
          Days: 'MWF',
          Start: '1200',
          Stop: '1250',
          Room: 'GH-215',

        },
        {
          Sub: 'CIS',
          Crs: '231',
          Sec: '0002',
          CourseTitle: 'MICROCMPTR SOFTWARE',
          Days: 'TR',
          Start: '1100',
          Stop: '1215',
          Room: 'GH-215',

        },
        {
          Sub: 'CIS',
          Crs: '232',
          Sec: '0001',
          CourseTitle: 'SPREADSHEET SOFTWARE',
          Days: 'TR',
          Start: '1000',
          Stop: '1215',
          Room: 'GH-211',

        },
        {
          Sub: 'CIS',
          Crs: '233',
          Sec: '00W0',
          CourseTitle: 'ADV SPREADSHEET',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        }
      ]
    },
    {
      name: 'Pulfer, Jodi',
      dept: 'Business & Economics',
      phone: '7021',
      office: 'GH 111C',
      time: {
        mmw: '',
        tr: '',
        both: '9:30am - 10:30am	'
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '142',
          Sec: '0001',
          CourseTitle: 'SURVEY OF ACCOUNTING',
          Days: 'TR',
          Start: '0800',
          Stop: '1045',
          Room: 'GH-115',
        },
      ]
    },
    {
      name: 'Ras, Gerard',
      dept: 'Business & Economics',
      phone: '7464',
      office: 'GH 206D',
      time: {
        mmw: '11:00am - 11:50am',
        tr: '8:30am - 9:20am',
        both: ''
      },
      classSchedule: [
        {
          Sub: 'BUS',
          Crs: '322',
          Sec: '0001',
          CourseTitle: 'MANAGERIAL FINANCE',
          Days: 'TR',
          Start: '0930',
          Stop: '1045',
          Room: 'GH-108',

        },
        {
          Sub: 'BUS',
          Crs: '322',
          Sec: '00W0',
          CourseTitle: 'MANAGERIAL FINANCE',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',
        },
        {
          Sub: 'BUS',
          Crs: '342',
          Sec: '0001',
          CourseTitle: 'ACCTG INFO SYSTEMS',
          Days: 'MWF',
          Start: '1000',
          Stop: '1050',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '423',
          Sec: '0001',
          CourseTitle: 'ADV MAN. FINANCE',
          Days: 'MWF',
          Start: '0900',
          Stop: '0950',
          Room: 'GH-210',

        },
        {
          Sub: 'BUS',
          Crs: '444',
          Sec: '00W0',
          CourseTitle: 'GOV. ACCTG',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        },
        {
          Sub: 'BUS',
          Crs: '608',
          Sec: '0001',
          CourseTitle: 'FINANCIAL ADMIN',
          Days: 'TBA',
          Start: '',
          Stop: '',
          Room: 'ONLINE',

        }
      ]
    },

  ]


  findTecherByName(name) {
    return this.data.find(x => x.name === name);
  }
}
