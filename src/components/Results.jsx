import React, { useState } from 'react';

const trainList = {
    "creationDate": "2024-03-28T16:10:45.5569387+02:00",
    "version": "4.1.0",
    "successStatus": 1,
    "statusCode": 200,
    "errorMessages": null,
    "result": {
        "numOfResultsToShow": 5,
        "startFromIndex": 25,
        "onFocusIndex": 26,
        "clientMessageId": 1,
        "freeSeatsError": false,
        "travels": [
            {
                "departureTime": "2024-03-28T00:13:00",
                "arrivalTime": "2024-03-28T00:39:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 701,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 1,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T00:39:00",
                        "departureTime": "2024-03-28T00:13:00",
                        "stopStations": [
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T00:20:00",
                                "departureTime": "2024-03-28T00:20:00",
                                "platform": 1,
                                "crowded": 0.04
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T00:28:00",
                                "departureTime": "2024-03-28T00:28:00",
                                "platform": 2,
                                "crowded": 0.0475
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0275,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "00:13",
                                "crowded": 0.0275,
                                "platform": 1
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "00:20",
                                "crowded": 0.04,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "00:28",
                                "crowded": 0.0475,
                                "platform": 2
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "00:39",
                                "crowded": 0.0575,
                                "platform": 4
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "00:49",
                                "crowded": 0.0875,
                                "platform": 4
                            },
                            {
                                "stationId": 8600,
                                "arrivalTime": "01:01",
                                "crowded": 0.11,
                                "platform": 1
                            },
                            {
                                "stationId": 680,
                                "arrivalTime": "01:29",
                                "crowded": 0,
                                "platform": 1
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T01:13:00",
                "arrivalTime": "2024-03-28T01:39:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 703,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 1,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T01:39:00",
                        "departureTime": "2024-03-28T01:13:00",
                        "stopStations": [
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T01:20:00",
                                "departureTime": "2024-03-28T01:20:00",
                                "platform": 1,
                                "crowded": 0.0175
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T01:28:00",
                                "departureTime": "2024-03-28T01:28:00",
                                "platform": 2,
                                "crowded": 0.0325
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.01,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "01:13",
                                "crowded": 0.01,
                                "platform": 1
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "01:20",
                                "crowded": 0.0175,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "01:28",
                                "crowded": 0.0325,
                                "platform": 2
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "01:39",
                                "crowded": 0.04,
                                "platform": 4
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "01:49",
                                "crowded": 0.05,
                                "platform": 4
                            },
                            {
                                "stationId": 8600,
                                "arrivalTime": "02:01",
                                "crowded": 0.04,
                                "platform": 1
                            },
                            {
                                "stationId": 680,
                                "arrivalTime": "02:29",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T02:11:00",
                "arrivalTime": "2024-03-28T02:39:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 705,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 1,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T02:39:00",
                        "departureTime": "2024-03-28T02:11:00",
                        "stopStations": [
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T02:18:00",
                                "departureTime": "2024-03-28T02:18:00",
                                "platform": 1,
                                "crowded": 0.035
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T02:27:00",
                                "departureTime": "2024-03-28T02:27:00",
                                "platform": 2,
                                "crowded": 0.05
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0275,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "02:11",
                                "crowded": 0.0275,
                                "platform": 1
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "02:18",
                                "crowded": 0.035,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "02:27",
                                "crowded": 0.05,
                                "platform": 2
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "02:39",
                                "crowded": 0.0675,
                                "platform": 4
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "02:49",
                                "crowded": 0.085,
                                "platform": 4
                            },
                            {
                                "stationId": 8600,
                                "arrivalTime": "03:01",
                                "crowded": 0.0175,
                                "platform": 1
                            },
                            {
                                "stationId": 680,
                                "arrivalTime": "03:29",
                                "crowded": 0,
                                "platform": 1
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T03:11:00",
                "arrivalTime": "2024-03-28T03:39:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 707,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 1,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T03:39:00",
                        "departureTime": "2024-03-28T03:11:00",
                        "stopStations": [
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T03:18:00",
                                "departureTime": "2024-03-28T03:18:00",
                                "platform": 1,
                                "crowded": 0.0425
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T03:27:00",
                                "departureTime": "2024-03-28T03:27:00",
                                "platform": 2,
                                "crowded": 0.06
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0325,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "03:11",
                                "crowded": 0.0325,
                                "platform": 1
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "03:18",
                                "crowded": 0.0425,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "03:27",
                                "crowded": 0.06,
                                "platform": 2
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "03:39",
                                "crowded": 0.0725,
                                "platform": 4
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "03:49",
                                "crowded": 0.085,
                                "platform": 4
                            },
                            {
                                "stationId": 8600,
                                "arrivalTime": "04:01",
                                "crowded": 0.04,
                                "platform": 1
                            },
                            {
                                "stationId": 680,
                                "arrivalTime": "04:29",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T04:11:00",
                "arrivalTime": "2024-03-28T04:39:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 709,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 1,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T04:39:00",
                        "departureTime": "2024-03-28T04:11:00",
                        "stopStations": [
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T04:18:00",
                                "departureTime": "2024-03-28T04:18:00",
                                "platform": 1,
                                "crowded": 0.035
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T04:27:00",
                                "departureTime": "2024-03-28T04:27:00",
                                "platform": 2,
                                "crowded": 0.06
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0225,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "04:11",
                                "crowded": 0.0225,
                                "platform": 1
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "04:18",
                                "crowded": 0.035,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "04:27",
                                "crowded": 0.06,
                                "platform": 2
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "04:39",
                                "crowded": 0.07,
                                "platform": 4
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "04:49",
                                "crowded": 0.0825,
                                "platform": 4
                            },
                            {
                                "stationId": 8600,
                                "arrivalTime": "05:01",
                                "crowded": 0.07,
                                "platform": 1
                            },
                            {
                                "stationId": 680,
                                "arrivalTime": "05:29",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T05:34:00",
                "arrivalTime": "2024-03-28T06:12:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 221,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T06:12:00",
                        "departureTime": "2024-03-28T05:34:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T05:38:00",
                                "departureTime": "2024-03-28T05:38:00",
                                "platform": 2,
                                "crowded": 0.0875
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T05:45:00",
                                "departureTime": "2024-03-28T05:45:00",
                                "platform": 1,
                                "crowded": 0.2475
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T05:54:00",
                                "departureTime": "2024-03-28T05:54:00",
                                "platform": 2,
                                "crowded": 0.29
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T06:00:00",
                                "departureTime": "2024-03-28T06:00:00",
                                "platform": 1,
                                "crowded": 0.3
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T06:03:00",
                                "departureTime": "2024-03-28T06:03:00",
                                "platform": 1,
                                "crowded": 0.335
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0375,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "05:34",
                                "crowded": 0.0375,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "05:38",
                                "crowded": 0.0875,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "05:45",
                                "crowded": 0.2475,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "05:54",
                                "crowded": 0.29,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "06:00",
                                "crowded": 0.3,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "06:03",
                                "crowded": 0.335,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "06:12",
                                "crowded": 0.3225,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "06:19",
                                "crowded": 0.2925,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "06:26",
                                "crowded": 0.1775,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "06:28",
                                "crowded": 0.11,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "06:33",
                                "crowded": 0.1,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "06:45",
                                "crowded": 0.105,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "06:50",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "06:57",
                                "crowded": 0.0875,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "07:02",
                                "crowded": 0.055,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "07:09",
                                "crowded": 0.0525,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "07:19",
                                "crowded": 0.03,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "07:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T06:07:00",
                "arrivalTime": "2024-03-28T06:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 223,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T06:43:00",
                        "departureTime": "2024-03-28T06:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T06:11:00",
                                "departureTime": "2024-03-28T06:11:00",
                                "platform": 2,
                                "crowded": 0.165
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T06:17:00",
                                "departureTime": "2024-03-28T06:17:00",
                                "platform": 1,
                                "crowded": 0.3575
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T06:27:00",
                                "departureTime": "2024-03-28T06:27:00",
                                "platform": 2,
                                "crowded": 0.4075
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T06:32:00",
                                "departureTime": "2024-03-28T06:32:00",
                                "platform": 1,
                                "crowded": 0.4075
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T06:35:00",
                                "departureTime": "2024-03-28T06:35:00",
                                "platform": 1,
                                "crowded": 0.4675
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0975,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "06:07",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "06:11",
                                "crowded": 0.165,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "06:17",
                                "crowded": 0.3575,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "06:27",
                                "crowded": 0.4075,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "06:32",
                                "crowded": 0.4075,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "06:35",
                                "crowded": 0.4675,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "06:43",
                                "crowded": 0.4475,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "06:49",
                                "crowded": 0.3925,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "06:56",
                                "crowded": 0.2075,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "06:58",
                                "crowded": 0.1125,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "07:03",
                                "crowded": 0.085,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "07:14",
                                "crowded": 0.09,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "07:19",
                                "crowded": 0.0775,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "07:26",
                                "crowded": 0.0675,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "07:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T06:37:00",
                "arrivalTime": "2024-03-28T07:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 225,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T07:13:00",
                        "departureTime": "2024-03-28T06:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T06:41:00",
                                "departureTime": "2024-03-28T06:41:00",
                                "platform": 2,
                                "crowded": 0.205
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T06:47:00",
                                "departureTime": "2024-03-28T06:47:00",
                                "platform": 1,
                                "crowded": 0.3975
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T06:57:00",
                                "departureTime": "2024-03-28T06:57:00",
                                "platform": 2,
                                "crowded": 0.4975
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T07:02:00",
                                "departureTime": "2024-03-28T07:02:00",
                                "platform": 1,
                                "crowded": 0.5075
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T07:05:00",
                                "departureTime": "2024-03-28T07:05:00",
                                "platform": 1,
                                "crowded": 0.59
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0875,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "06:37",
                                "crowded": 0.0875,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "06:41",
                                "crowded": 0.205,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "06:47",
                                "crowded": 0.3975,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "06:57",
                                "crowded": 0.4975,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "07:02",
                                "crowded": 0.5075,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "07:05",
                                "crowded": 0.59,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "07:13",
                                "crowded": 0.5925,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "07:19",
                                "crowded": 0.5325,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "07:26",
                                "crowded": 0.3325,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "07:28",
                                "crowded": 0.18,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "07:33",
                                "crowded": 0.1575,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "07:45",
                                "crowded": 0.155,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "07:50",
                                "crowded": 0.15,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "07:57",
                                "crowded": 0.1325,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "08:02",
                                "crowded": 0.0675,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "08:10",
                                "crowded": 0.065,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "08:20",
                                "crowded": 0.04,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "08:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T07:07:00",
                "arrivalTime": "2024-03-28T07:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 227,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T07:43:00",
                        "departureTime": "2024-03-28T07:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T07:11:00",
                                "departureTime": "2024-03-28T07:11:00",
                                "platform": 2,
                                "crowded": 0.345
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T07:17:00",
                                "departureTime": "2024-03-28T07:17:00",
                                "platform": 1,
                                "crowded": 0.5425
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T07:27:00",
                                "departureTime": "2024-03-28T07:27:00",
                                "platform": 2,
                                "crowded": 0.68
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T07:32:00",
                                "departureTime": "2024-03-28T07:32:00",
                                "platform": 1,
                                "crowded": 0.6675
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T07:35:00",
                                "departureTime": "2024-03-28T07:35:00",
                                "platform": 1,
                                "crowded": 0.835
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.1475,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "07:07",
                                "crowded": 0.1475,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "07:11",
                                "crowded": 0.345,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "07:17",
                                "crowded": 0.5425,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "07:27",
                                "crowded": 0.68,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "07:32",
                                "crowded": 0.6675,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "07:35",
                                "crowded": 0.835,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "07:43",
                                "crowded": 0.8575,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "07:49",
                                "crowded": 0.7525,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "07:56",
                                "crowded": 0.495,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "07:58",
                                "crowded": 0.19,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "08:03",
                                "crowded": 0.165,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "08:14",
                                "crowded": 0.1625,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "08:19",
                                "crowded": 0.1625,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "08:26",
                                "crowded": 0.15,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "08:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T07:37:00",
                "arrivalTime": "2024-03-28T08:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 229,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T08:13:00",
                        "departureTime": "2024-03-28T07:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T07:41:00",
                                "departureTime": "2024-03-28T07:41:00",
                                "platform": 2,
                                "crowded": 0.3575
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T07:47:00",
                                "departureTime": "2024-03-28T07:47:00",
                                "platform": 1,
                                "crowded": 0.625
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T07:57:00",
                                "departureTime": "2024-03-28T07:57:00",
                                "platform": 2,
                                "crowded": 0.69
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T08:02:00",
                                "departureTime": "2024-03-28T08:02:00",
                                "platform": 1,
                                "crowded": 0.6875
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T08:05:00",
                                "departureTime": "2024-03-28T08:05:00",
                                "platform": 1,
                                "crowded": 0.7925
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.1525,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "07:37",
                                "crowded": 0.1525,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "07:41",
                                "crowded": 0.3575,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "07:47",
                                "crowded": 0.625,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "07:57",
                                "crowded": 0.69,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "08:02",
                                "crowded": 0.6875,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "08:05",
                                "crowded": 0.7925,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "08:13",
                                "crowded": 0.79,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "08:19",
                                "crowded": 0.6975,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "08:26",
                                "crowded": 0.425,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "08:28",
                                "crowded": 0.1525,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "08:33",
                                "crowded": 0.125,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "08:45",
                                "crowded": 0.125,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "08:50",
                                "crowded": 0.1225,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "08:57",
                                "crowded": 0.1125,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "09:02",
                                "crowded": 0.075,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "09:10",
                                "crowded": 0.065,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "09:20",
                                "crowded": 0.0375,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "09:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T08:07:00",
                "arrivalTime": "2024-03-28T08:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 231,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T08:43:00",
                        "departureTime": "2024-03-28T08:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T08:11:00",
                                "departureTime": "2024-03-28T08:11:00",
                                "platform": 2,
                                "crowded": 0.3025
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T08:17:00",
                                "departureTime": "2024-03-28T08:17:00",
                                "platform": 1,
                                "crowded": 0.46
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T08:27:00",
                                "departureTime": "2024-03-28T08:27:00",
                                "platform": 2,
                                "crowded": 0.53
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T08:32:00",
                                "departureTime": "2024-03-28T08:32:00",
                                "platform": 1,
                                "crowded": 0.5125
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T08:35:00",
                                "departureTime": "2024-03-28T08:35:00",
                                "platform": 1,
                                "crowded": 0.5975
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.16,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "08:07",
                                "crowded": 0.16,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "08:11",
                                "crowded": 0.3025,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "08:17",
                                "crowded": 0.46,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "08:27",
                                "crowded": 0.53,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "08:32",
                                "crowded": 0.5125,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "08:35",
                                "crowded": 0.5975,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "08:43",
                                "crowded": 0.6025,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "08:49",
                                "crowded": 0.5525,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "08:56",
                                "crowded": 0.3825,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "08:58",
                                "crowded": 0.1325,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "09:03",
                                "crowded": 0.1,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "09:14",
                                "crowded": 0.0975,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "09:19",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "09:26",
                                "crowded": 0.0875,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "09:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T08:37:00",
                "arrivalTime": "2024-03-28T09:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 233,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T09:13:00",
                        "departureTime": "2024-03-28T08:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T08:41:00",
                                "departureTime": "2024-03-28T08:41:00",
                                "platform": 2,
                                "crowded": 0.285
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T08:47:00",
                                "departureTime": "2024-03-28T08:47:00",
                                "platform": 1,
                                "crowded": 0.5325
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T08:57:00",
                                "departureTime": "2024-03-28T08:57:00",
                                "platform": 2,
                                "crowded": 0.6125
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T09:02:00",
                                "departureTime": "2024-03-28T09:02:00",
                                "platform": 1,
                                "crowded": 0.6225
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T09:05:00",
                                "departureTime": "2024-03-28T09:05:00",
                                "platform": 1,
                                "crowded": 0.7075
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.165,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "08:37",
                                "crowded": 0.165,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "08:41",
                                "crowded": 0.285,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "08:47",
                                "crowded": 0.5325,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "08:57",
                                "crowded": 0.6125,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "09:02",
                                "crowded": 0.6225,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "09:05",
                                "crowded": 0.7075,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "09:13",
                                "crowded": 0.735,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "09:19",
                                "crowded": 0.665,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "09:26",
                                "crowded": 0.4225,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "09:28",
                                "crowded": 0.1575,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "09:33",
                                "crowded": 0.1175,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "09:45",
                                "crowded": 0.1175,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "09:50",
                                "crowded": 0.1225,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "09:57",
                                "crowded": 0.11,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "10:02",
                                "crowded": 0.075,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "10:10",
                                "crowded": 0.07,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "10:20",
                                "crowded": 0.035,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "10:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T09:07:00",
                "arrivalTime": "2024-03-28T09:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 235,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T09:43:00",
                        "departureTime": "2024-03-28T09:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T09:11:00",
                                "departureTime": "2024-03-28T09:11:00",
                                "platform": 2,
                                "crowded": 0.2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T09:17:00",
                                "departureTime": "2024-03-28T09:17:00",
                                "platform": 1,
                                "crowded": 0.29
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T09:27:00",
                                "departureTime": "2024-03-28T09:27:00",
                                "platform": 2,
                                "crowded": 0.335
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T09:32:00",
                                "departureTime": "2024-03-28T09:32:00",
                                "platform": 1,
                                "crowded": 0.3375
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T09:35:00",
                                "departureTime": "2024-03-28T09:35:00",
                                "platform": 1,
                                "crowded": 0.3775
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.1225,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "09:07",
                                "crowded": 0.1225,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "09:11",
                                "crowded": 0.2,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "09:17",
                                "crowded": 0.29,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "09:27",
                                "crowded": 0.335,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "09:32",
                                "crowded": 0.3375,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "09:35",
                                "crowded": 0.3775,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "09:43",
                                "crowded": 0.3875,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "09:49",
                                "crowded": 0.3425,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "09:56",
                                "crowded": 0.2125,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "09:58",
                                "crowded": 0.08,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "10:03",
                                "crowded": 0.0675,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "10:14",
                                "crowded": 0.0675,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "10:19",
                                "crowded": 0.065,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "10:26",
                                "crowded": 0.055,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "10:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T09:37:00",
                "arrivalTime": "2024-03-28T10:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 237,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T10:13:00",
                        "departureTime": "2024-03-28T09:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T09:41:00",
                                "departureTime": "2024-03-28T09:41:00",
                                "platform": 2,
                                "crowded": 0.0875
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T09:47:00",
                                "departureTime": "2024-03-28T09:47:00",
                                "platform": 1,
                                "crowded": 0.17
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T09:57:00",
                                "departureTime": "2024-03-28T09:57:00",
                                "platform": 2,
                                "crowded": 0.22
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T10:02:00",
                                "departureTime": "2024-03-28T10:02:00",
                                "platform": 1,
                                "crowded": 0.2275
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T10:05:00",
                                "departureTime": "2024-03-28T10:05:00",
                                "platform": 1,
                                "crowded": 0.26
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0525,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "09:37",
                                "crowded": 0.0525,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "09:41",
                                "crowded": 0.0875,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "09:47",
                                "crowded": 0.17,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "09:57",
                                "crowded": 0.22,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "10:02",
                                "crowded": 0.2275,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "10:05",
                                "crowded": 0.26,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "10:13",
                                "crowded": 0.2675,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "10:19",
                                "crowded": 0.2525,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "10:26",
                                "crowded": 0.175,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "10:28",
                                "crowded": 0.11,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "10:33",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "10:45",
                                "crowded": 0.0975,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "10:50",
                                "crowded": 0.105,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "10:57",
                                "crowded": 0.1025,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "11:02",
                                "crowded": 0.0825,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "11:10",
                                "crowded": 0.075,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "11:20",
                                "crowded": 0.0425,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "11:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T10:07:00",
                "arrivalTime": "2024-03-28T10:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 239,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T10:43:00",
                        "departureTime": "2024-03-28T10:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T10:11:00",
                                "departureTime": "2024-03-28T10:11:00",
                                "platform": 2,
                                "crowded": 0.095
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T10:17:00",
                                "departureTime": "2024-03-28T10:17:00",
                                "platform": 1,
                                "crowded": 0.145
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T10:27:00",
                                "departureTime": "2024-03-28T10:27:00",
                                "platform": 2,
                                "crowded": 0.24
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T10:32:00",
                                "departureTime": "2024-03-28T10:32:00",
                                "platform": 1,
                                "crowded": 0.2475
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T10:35:00",
                                "departureTime": "2024-03-28T10:35:00",
                                "platform": 1,
                                "crowded": 0.305
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.065,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "10:07",
                                "crowded": 0.065,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "10:11",
                                "crowded": 0.095,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "10:17",
                                "crowded": 0.145,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "10:27",
                                "crowded": 0.24,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "10:32",
                                "crowded": 0.2475,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "10:35",
                                "crowded": 0.305,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "10:43",
                                "crowded": 0.32,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "10:49",
                                "crowded": 0.295,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "10:56",
                                "crowded": 0.1825,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "10:58",
                                "crowded": 0.0975,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "11:03",
                                "crowded": 0.0875,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "11:14",
                                "crowded": 0.085,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "11:19",
                                "crowded": 0.08,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "11:26",
                                "crowded": 0.065,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "11:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T10:37:00",
                "arrivalTime": "2024-03-28T11:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 241,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T11:13:00",
                        "departureTime": "2024-03-28T10:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T10:41:00",
                                "departureTime": "2024-03-28T10:41:00",
                                "platform": 2,
                                "crowded": 0.0775
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T10:47:00",
                                "departureTime": "2024-03-28T10:47:00",
                                "platform": 1,
                                "crowded": 0.15
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T10:57:00",
                                "departureTime": "2024-03-28T10:57:00",
                                "platform": 2,
                                "crowded": 0.24
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T11:02:00",
                                "departureTime": "2024-03-28T11:02:00",
                                "platform": 1,
                                "crowded": 0.2575
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T11:05:00",
                                "departureTime": "2024-03-28T11:05:00",
                                "platform": 1,
                                "crowded": 0.305
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.05,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "10:37",
                                "crowded": 0.05,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "10:41",
                                "crowded": 0.0775,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "10:47",
                                "crowded": 0.15,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "10:57",
                                "crowded": 0.24,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "11:02",
                                "crowded": 0.2575,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "11:05",
                                "crowded": 0.305,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "11:13",
                                "crowded": 0.325,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "11:19",
                                "crowded": 0.3125,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "11:26",
                                "crowded": 0.235,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "11:28",
                                "crowded": 0.1875,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "11:33",
                                "crowded": 0.185,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "11:45",
                                "crowded": 0.1775,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "11:50",
                                "crowded": 0.1875,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "11:57",
                                "crowded": 0.17,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "12:02",
                                "crowded": 0.1275,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "12:10",
                                "crowded": 0.1125,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "12:20",
                                "crowded": 0.0675,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "12:31",
                                "crowded": 0,
                                "platform": 1
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T11:07:00",
                "arrivalTime": "2024-03-28T11:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 243,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T11:43:00",
                        "departureTime": "2024-03-28T11:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T11:11:00",
                                "departureTime": "2024-03-28T11:11:00",
                                "platform": 2,
                                "crowded": 0.075
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T11:17:00",
                                "departureTime": "2024-03-28T11:17:00",
                                "platform": 1,
                                "crowded": 0.145
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T11:27:00",
                                "departureTime": "2024-03-28T11:27:00",
                                "platform": 2,
                                "crowded": 0.22
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T11:32:00",
                                "departureTime": "2024-03-28T11:32:00",
                                "platform": 1,
                                "crowded": 0.2225
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T11:35:00",
                                "departureTime": "2024-03-28T11:35:00",
                                "platform": 1,
                                "crowded": 0.265
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.055,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "11:07",
                                "crowded": 0.055,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "11:11",
                                "crowded": 0.075,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "11:17",
                                "crowded": 0.145,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "11:27",
                                "crowded": 0.22,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "11:32",
                                "crowded": 0.2225,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "11:35",
                                "crowded": 0.265,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "11:43",
                                "crowded": 0.275,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "11:49",
                                "crowded": 0.265,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "11:56",
                                "crowded": 0.165,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "11:58",
                                "crowded": 0.1075,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "12:03",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "12:14",
                                "crowded": 0.0925,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "12:19",
                                "crowded": 0.07,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "12:26",
                                "crowded": 0.0575,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "12:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T11:37:00",
                "arrivalTime": "2024-03-28T12:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 245,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T12:13:00",
                        "departureTime": "2024-03-28T11:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T11:41:00",
                                "departureTime": "2024-03-28T11:41:00",
                                "platform": 2,
                                "crowded": 0.0625
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T11:47:00",
                                "departureTime": "2024-03-28T11:47:00",
                                "platform": 1,
                                "crowded": 0.1025
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T11:57:00",
                                "departureTime": "2024-03-28T11:57:00",
                                "platform": 2,
                                "crowded": 0.165
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T12:02:00",
                                "departureTime": "2024-03-28T12:02:00",
                                "platform": 1,
                                "crowded": 0.175
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T12:05:00",
                                "departureTime": "2024-03-28T12:05:00",
                                "platform": 1,
                                "crowded": 0.21
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0425,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "11:37",
                                "crowded": 0.0425,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "11:41",
                                "crowded": 0.0625,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "11:47",
                                "crowded": 0.1025,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "11:57",
                                "crowded": 0.165,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "12:02",
                                "crowded": 0.175,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "12:05",
                                "crowded": 0.21,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "12:13",
                                "crowded": 0.2325,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "12:19",
                                "crowded": 0.2475,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "12:26",
                                "crowded": 0.2,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "12:28",
                                "crowded": 0.1775,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "12:33",
                                "crowded": 0.18,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "12:45",
                                "crowded": 0.175,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "12:50",
                                "crowded": 0.1825,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "12:57",
                                "crowded": 0.175,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "13:02",
                                "crowded": 0.1375,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "13:10",
                                "crowded": 0.12,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "13:20",
                                "crowded": 0.075,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "13:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T12:07:00",
                "arrivalTime": "2024-03-28T12:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 247,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T12:43:00",
                        "departureTime": "2024-03-28T12:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T12:11:00",
                                "departureTime": "2024-03-28T12:11:00",
                                "platform": 2,
                                "crowded": 0.09
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T12:17:00",
                                "departureTime": "2024-03-28T12:17:00",
                                "platform": 1,
                                "crowded": 0.135
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T12:27:00",
                                "departureTime": "2024-03-28T12:27:00",
                                "platform": 2,
                                "crowded": 0.2025
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T12:32:00",
                                "departureTime": "2024-03-28T12:32:00",
                                "platform": 1,
                                "crowded": 0.215
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T12:35:00",
                                "departureTime": "2024-03-28T12:35:00",
                                "platform": 1,
                                "crowded": 0.2575
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0725,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "12:07",
                                "crowded": 0.0725,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "12:11",
                                "crowded": 0.09,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "12:17",
                                "crowded": 0.135,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "12:27",
                                "crowded": 0.2025,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "12:32",
                                "crowded": 0.215,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "12:35",
                                "crowded": 0.2575,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "12:43",
                                "crowded": 0.2525,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "12:49",
                                "crowded": 0.2575,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "12:56",
                                "crowded": 0.165,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "12:58",
                                "crowded": 0.1375,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "13:03",
                                "crowded": 0.1325,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "13:14",
                                "crowded": 0.12,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "13:19",
                                "crowded": 0.0875,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "13:26",
                                "crowded": 0.0675,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "13:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T12:37:00",
                "arrivalTime": "2024-03-28T13:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 249,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T13:13:00",
                        "departureTime": "2024-03-28T12:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T12:41:00",
                                "departureTime": "2024-03-28T12:41:00",
                                "platform": 2,
                                "crowded": 0.0825
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T12:47:00",
                                "departureTime": "2024-03-28T12:47:00",
                                "platform": 1,
                                "crowded": 0.1275
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T12:57:00",
                                "departureTime": "2024-03-28T12:57:00",
                                "platform": 2,
                                "crowded": 0.1975
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T13:02:00",
                                "departureTime": "2024-03-28T13:02:00",
                                "platform": 1,
                                "crowded": 0.2075
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T13:05:00",
                                "departureTime": "2024-03-28T13:05:00",
                                "platform": 1,
                                "crowded": 0.235
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0675,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "12:37",
                                "crowded": 0.0675,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "12:41",
                                "crowded": 0.0825,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "12:47",
                                "crowded": 0.1275,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "12:57",
                                "crowded": 0.1975,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "13:02",
                                "crowded": 0.2075,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "13:05",
                                "crowded": 0.235,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "13:13",
                                "crowded": 0.2525,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "13:19",
                                "crowded": 0.2875,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "13:26",
                                "crowded": 0.2425,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "13:28",
                                "crowded": 0.2275,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "13:33",
                                "crowded": 0.235,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "13:45",
                                "crowded": 0.2275,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "13:50",
                                "crowded": 0.2275,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "13:57",
                                "crowded": 0.2125,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "14:02",
                                "crowded": 0.18,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "14:10",
                                "crowded": 0.165,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "14:20",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "14:31",
                                "crowded": 0,
                                "platform": 2
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T13:07:00",
                "arrivalTime": "2024-03-28T13:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 251,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T13:43:00",
                        "departureTime": "2024-03-28T13:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T13:11:00",
                                "departureTime": "2024-03-28T13:11:00",
                                "platform": 2,
                                "crowded": 0.155
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T13:17:00",
                                "departureTime": "2024-03-28T13:17:00",
                                "platform": 1,
                                "crowded": 0.2
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T13:27:00",
                                "departureTime": "2024-03-28T13:27:00",
                                "platform": 2,
                                "crowded": 0.275
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T13:32:00",
                                "departureTime": "2024-03-28T13:32:00",
                                "platform": 1,
                                "crowded": 0.2925
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T13:35:00",
                                "departureTime": "2024-03-28T13:35:00",
                                "platform": 1,
                                "crowded": 0.3375
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.125,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "13:07",
                                "crowded": 0.125,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "13:11",
                                "crowded": 0.155,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "13:17",
                                "crowded": 0.2,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "13:27",
                                "crowded": 0.275,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "13:32",
                                "crowded": 0.2925,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "13:35",
                                "crowded": 0.3375,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "13:43",
                                "crowded": 0.33,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "13:49",
                                "crowded": 0.3575,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "13:56",
                                "crowded": 0.2575,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "13:58",
                                "crowded": 0.225,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "14:03",
                                "crowded": 0.215,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "14:14",
                                "crowded": 0.2,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "14:19",
                                "crowded": 0.1625,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "14:26",
                                "crowded": 0.1175,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "14:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T13:37:00",
                "arrivalTime": "2024-03-28T14:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 253,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T14:13:00",
                        "departureTime": "2024-03-28T13:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T13:41:00",
                                "departureTime": "2024-03-28T13:41:00",
                                "platform": 2,
                                "crowded": 0.1375
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T13:47:00",
                                "departureTime": "2024-03-28T13:47:00",
                                "platform": 1,
                                "crowded": 0.195
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T13:57:00",
                                "departureTime": "2024-03-28T13:57:00",
                                "platform": 2,
                                "crowded": 0.2825
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T14:02:00",
                                "departureTime": "2024-03-28T14:02:00",
                                "platform": 1,
                                "crowded": 0.3025
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T14:05:00",
                                "departureTime": "2024-03-28T14:05:00",
                                "platform": 1,
                                "crowded": 0.355
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.1125,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "13:37",
                                "crowded": 0.1125,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "13:41",
                                "crowded": 0.1375,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "13:47",
                                "crowded": 0.195,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "13:57",
                                "crowded": 0.2825,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "14:02",
                                "crowded": 0.3025,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "14:05",
                                "crowded": 0.355,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "14:13",
                                "crowded": 0.39,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "14:19",
                                "crowded": 0.4725,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "14:26",
                                "crowded": 0.41,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "14:28",
                                "crowded": 0.4475,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "14:33",
                                "crowded": 0.455,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "14:45",
                                "crowded": 0.4375,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "14:50",
                                "crowded": 0.455,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "14:57",
                                "crowded": 0.4125,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "15:02",
                                "crowded": 0.355,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "15:10",
                                "crowded": 0.32,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "15:20",
                                "crowded": 0.19,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "15:31",
                                "crowded": 0,
                                "platform": 4
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T14:07:00",
                "arrivalTime": "2024-03-28T14:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 255,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T14:43:00",
                        "departureTime": "2024-03-28T14:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T14:11:00",
                                "departureTime": "2024-03-28T14:11:00",
                                "platform": 2,
                                "crowded": 0.1975
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T14:17:00",
                                "departureTime": "2024-03-28T14:17:00",
                                "platform": 1,
                                "crowded": 0.2625
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T14:27:00",
                                "departureTime": "2024-03-28T14:27:00",
                                "platform": 2,
                                "crowded": 0.3275
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T14:32:00",
                                "departureTime": "2024-03-28T14:32:00",
                                "platform": 1,
                                "crowded": 0.345
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T14:35:00",
                                "departureTime": "2024-03-28T14:35:00",
                                "platform": 1,
                                "crowded": 0.395
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.1675,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "14:07",
                                "crowded": 0.1675,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "14:11",
                                "crowded": 0.1975,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "14:17",
                                "crowded": 0.2625,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "14:27",
                                "crowded": 0.3275,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "14:32",
                                "crowded": 0.345,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "14:35",
                                "crowded": 0.395,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "14:43",
                                "crowded": 0.3775,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "14:49",
                                "crowded": 0.425,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "14:56",
                                "crowded": 0.3425,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "14:58",
                                "crowded": 0.345,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "15:03",
                                "crowded": 0.3425,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "15:14",
                                "crowded": 0.3075,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "15:19",
                                "crowded": 0.2375,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "15:26",
                                "crowded": 0.16,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "15:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T14:37:00",
                "arrivalTime": "2024-03-28T15:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 257,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T15:13:00",
                        "departureTime": "2024-03-28T14:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T14:41:00",
                                "departureTime": "2024-03-28T14:41:00",
                                "platform": 2,
                                "crowded": 0.155
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T14:47:00",
                                "departureTime": "2024-03-28T14:47:00",
                                "platform": 1,
                                "crowded": 0.1975
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T14:57:00",
                                "departureTime": "2024-03-28T14:57:00",
                                "platform": 2,
                                "crowded": 0.245
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T15:02:00",
                                "departureTime": "2024-03-28T15:02:00",
                                "platform": 1,
                                "crowded": 0.265
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T15:05:00",
                                "departureTime": "2024-03-28T15:05:00",
                                "platform": 1,
                                "crowded": 0.3
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.1325,
                        "trainPosition": {
                            "currentLastStation": 5200,
                            "nextStation": 5410,
                            "calcDiffMinutes": 2
                        },
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "14:37",
                                "crowded": 0.1325,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "14:41",
                                "crowded": 0.155,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "14:47",
                                "crowded": 0.1975,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "14:57",
                                "crowded": 0.245,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "15:02",
                                "crowded": 0.265,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "15:05",
                                "crowded": 0.3,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "15:13",
                                "crowded": 0.315,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "15:19",
                                "crowded": 0.425,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "15:26",
                                "crowded": 0.4525,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "15:28",
                                "crowded": 0.58,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "15:33",
                                "crowded": 0.6025,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "15:45",
                                "crowded": 0.57,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "15:50",
                                "crowded": 0.56,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "15:57",
                                "crowded": 0.4775,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "16:02",
                                "crowded": 0.42,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "16:10",
                                "crowded": 0.37,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "16:20",
                                "crowded": 0.2125,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "16:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T15:07:00",
                "arrivalTime": "2024-03-28T15:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 259,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T15:43:00",
                        "departureTime": "2024-03-28T15:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T15:11:00",
                                "departureTime": "2024-03-28T15:11:00",
                                "platform": 2,
                                "crowded": 0.2025
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T15:17:00",
                                "departureTime": "2024-03-28T15:17:00",
                                "platform": 1,
                                "crowded": 0.235
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T15:27:00",
                                "departureTime": "2024-03-28T15:27:00",
                                "platform": 2,
                                "crowded": 0.25
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T15:32:00",
                                "departureTime": "2024-03-28T15:32:00",
                                "platform": 1,
                                "crowded": 0.28
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T15:35:00",
                                "departureTime": "2024-03-28T15:35:00",
                                "platform": 1,
                                "crowded": 0.28
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.165,
                        "trainPosition": {
                            "currentLastStation": 4900,
                            "nextStation": 5150,
                            "calcDiffMinutes": 0
                        },
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "15:07",
                                "crowded": 0.165,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "15:11",
                                "crowded": 0.2025,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "15:17",
                                "crowded": 0.235,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "15:27",
                                "crowded": 0.25,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "15:32",
                                "crowded": 0.28,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "15:35",
                                "crowded": 0.28,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "15:43",
                                "crowded": 0.2675,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "15:49",
                                "crowded": 0.3125,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "15:56",
                                "crowded": 0.3175,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "15:58",
                                "crowded": 0.3825,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "16:03",
                                "crowded": 0.3875,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "16:14",
                                "crowded": 0.345,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "16:19",
                                "crowded": 0.2975,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "16:26",
                                "crowded": 0.1925,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "16:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T15:37:00",
                "arrivalTime": "2024-03-28T16:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 261,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T16:13:00",
                        "departureTime": "2024-03-28T15:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T15:41:00",
                                "departureTime": "2024-03-28T15:41:00",
                                "platform": 2,
                                "crowded": 0.17
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T15:47:00",
                                "departureTime": "2024-03-28T15:47:00",
                                "platform": 1,
                                "crowded": 0.2175
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T15:57:00",
                                "departureTime": "2024-03-28T15:57:00",
                                "platform": 2,
                                "crowded": 0.27
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T16:02:00",
                                "departureTime": "2024-03-28T16:02:00",
                                "platform": 1,
                                "crowded": 0.3225
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T16:05:00",
                                "departureTime": "2024-03-28T16:05:00",
                                "platform": 1,
                                "crowded": 0.3525
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.13,
                        "trainPosition": {
                            "currentLastStation": 3400,
                            "nextStation": 3500,
                            "calcDiffMinutes": 0
                        },
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "15:37",
                                "crowded": 0.13,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "15:41",
                                "crowded": 0.17,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "15:47",
                                "crowded": 0.2175,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "15:57",
                                "crowded": 0.27,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "16:02",
                                "crowded": 0.3225,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "16:05",
                                "crowded": 0.3525,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "16:13",
                                "crowded": 0.4025,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "16:19",
                                "crowded": 0.55,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "16:26",
                                "crowded": 0.5875,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "16:28",
                                "crowded": 0.72,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "16:33",
                                "crowded": 0.74,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "16:45",
                                "crowded": 0.6825,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "16:50",
                                "crowded": 0.69,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "16:57",
                                "crowded": 0.59,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "17:02",
                                "crowded": 0.58,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "17:10",
                                "crowded": 0.52,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "17:20",
                                "crowded": 0.2975,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "17:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T16:07:00",
                "arrivalTime": "2024-03-28T16:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 263,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T16:43:00",
                        "departureTime": "2024-03-28T16:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T16:11:00",
                                "departureTime": "2024-03-28T16:11:00",
                                "platform": 2,
                                "crowded": 0.1275
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T16:17:00",
                                "departureTime": "2024-03-28T16:17:00",
                                "platform": 1,
                                "crowded": 0.15
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T16:27:00",
                                "departureTime": "2024-03-28T16:27:00",
                                "platform": 2,
                                "crowded": 0.1525
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T16:32:00",
                                "departureTime": "2024-03-28T16:32:00",
                                "platform": 1,
                                "crowded": 0.195
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T16:35:00",
                                "departureTime": "2024-03-28T16:35:00",
                                "platform": 1,
                                "crowded": 0.195
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.095,
                        "trainPosition": {
                            "currentLastStation": 2820,
                            "nextStation": 3100,
                            "calcDiffMinutes": 2
                        },
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "16:07",
                                "crowded": 0.095,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "16:11",
                                "crowded": 0.1275,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "16:17",
                                "crowded": 0.15,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "16:27",
                                "crowded": 0.1525,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "16:32",
                                "crowded": 0.195,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "16:35",
                                "crowded": 0.195,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "16:43",
                                "crowded": 0.2225,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "16:49",
                                "crowded": 0.2725,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "16:56",
                                "crowded": 0.2875,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "16:58",
                                "crowded": 0.38,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "17:03",
                                "crowded": 0.3775,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "17:14",
                                "crowded": 0.3425,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "17:19",
                                "crowded": 0.31,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "17:26",
                                "crowded": 0.2125,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "17:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T16:37:00",
                "arrivalTime": "2024-03-28T17:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 265,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T17:13:00",
                        "departureTime": "2024-03-28T16:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T16:41:00",
                                "departureTime": "2024-03-28T16:41:00",
                                "platform": 2,
                                "crowded": 0.12
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T16:47:00",
                                "departureTime": "2024-03-28T16:47:00",
                                "platform": 1,
                                "crowded": 0.1625
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T16:57:00",
                                "departureTime": "2024-03-28T16:57:00",
                                "platform": 2,
                                "crowded": 0.1925
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T17:02:00",
                                "departureTime": "2024-03-28T17:02:00",
                                "platform": 1,
                                "crowded": 0.255
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T17:05:00",
                                "departureTime": "2024-03-28T17:05:00",
                                "platform": 1,
                                "crowded": 0.26
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0725,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "16:37",
                                "crowded": 0.0725,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "16:41",
                                "crowded": 0.12,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "16:47",
                                "crowded": 0.1625,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "16:57",
                                "crowded": 0.1925,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "17:02",
                                "crowded": 0.255,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "17:05",
                                "crowded": 0.26,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "17:13",
                                "crowded": 0.3275,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "17:19",
                                "crowded": 0.475,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "17:26",
                                "crowded": 0.5075,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "17:28",
                                "crowded": 0.64,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "17:33",
                                "crowded": 0.66,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "17:45",
                                "crowded": 0.615,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "17:50",
                                "crowded": 0.59,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "17:57",
                                "crowded": 0.4925,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "18:02",
                                "crowded": 0.405,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "18:10",
                                "crowded": 0.3575,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "18:20",
                                "crowded": 0.1925,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "18:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T17:07:00",
                "arrivalTime": "2024-03-28T17:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 267,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T17:43:00",
                        "departureTime": "2024-03-28T17:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T17:11:00",
                                "departureTime": "2024-03-28T17:11:00",
                                "platform": 2,
                                "crowded": 0.15
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T17:17:00",
                                "departureTime": "2024-03-28T17:17:00",
                                "platform": 1,
                                "crowded": 0.1725
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T17:27:00",
                                "departureTime": "2024-03-28T17:27:00",
                                "platform": 2,
                                "crowded": 0.17
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T17:32:00",
                                "departureTime": "2024-03-28T17:32:00",
                                "platform": 1,
                                "crowded": 0.2325
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T17:35:00",
                                "departureTime": "2024-03-28T17:35:00",
                                "platform": 1,
                                "crowded": 0.23
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0975,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "17:07",
                                "crowded": 0.0975,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "17:11",
                                "crowded": 0.15,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "17:17",
                                "crowded": 0.1725,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "17:27",
                                "crowded": 0.17,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "17:32",
                                "crowded": 0.2325,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "17:35",
                                "crowded": 0.23,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "17:43",
                                "crowded": 0.2575,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "17:49",
                                "crowded": 0.3325,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "17:56",
                                "crowded": 0.34,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "17:58",
                                "crowded": 0.4075,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "18:03",
                                "crowded": 0.4225,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "18:14",
                                "crowded": 0.3825,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "18:19",
                                "crowded": 0.3625,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "18:26",
                                "crowded": 0.2525,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "18:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T17:37:00",
                "arrivalTime": "2024-03-28T18:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 269,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T18:13:00",
                        "departureTime": "2024-03-28T17:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T17:41:00",
                                "departureTime": "2024-03-28T17:41:00",
                                "platform": 2,
                                "crowded": 0.1075
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T17:47:00",
                                "departureTime": "2024-03-28T17:47:00",
                                "platform": 1,
                                "crowded": 0.1525
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T17:57:00",
                                "departureTime": "2024-03-28T17:57:00",
                                "platform": 2,
                                "crowded": 0.18
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T18:02:00",
                                "departureTime": "2024-03-28T18:02:00",
                                "platform": 1,
                                "crowded": 0.24
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T18:05:00",
                                "departureTime": "2024-03-28T18:05:00",
                                "platform": 1,
                                "crowded": 0.25
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0675,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "17:37",
                                "crowded": 0.0675,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "17:41",
                                "crowded": 0.1075,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "17:47",
                                "crowded": 0.1525,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "17:57",
                                "crowded": 0.18,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "18:02",
                                "crowded": 0.24,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "18:05",
                                "crowded": 0.25,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "18:13",
                                "crowded": 0.285,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "18:19",
                                "crowded": 0.385,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "18:26",
                                "crowded": 0.3975,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "18:28",
                                "crowded": 0.4875,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "18:33",
                                "crowded": 0.4975,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "18:45",
                                "crowded": 0.465,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "18:50",
                                "crowded": 0.4425,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "18:57",
                                "crowded": 0.3675,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "19:02",
                                "crowded": 0.2725,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "19:10",
                                "crowded": 0.2275,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "19:20",
                                "crowded": 0.1225,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "19:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T18:07:00",
                "arrivalTime": "2024-03-28T18:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 271,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T18:43:00",
                        "departureTime": "2024-03-28T18:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T18:11:00",
                                "departureTime": "2024-03-28T18:11:00",
                                "platform": 2,
                                "crowded": 0.1175
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T18:17:00",
                                "departureTime": "2024-03-28T18:17:00",
                                "platform": 1,
                                "crowded": 0.155
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T18:27:00",
                                "departureTime": "2024-03-28T18:27:00",
                                "platform": 2,
                                "crowded": 0.1525
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T18:32:00",
                                "departureTime": "2024-03-28T18:32:00",
                                "platform": 1,
                                "crowded": 0.19
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T18:35:00",
                                "departureTime": "2024-03-28T18:35:00",
                                "platform": 1,
                                "crowded": 0.195
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.085,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "18:07",
                                "crowded": 0.085,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "18:11",
                                "crowded": 0.1175,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "18:17",
                                "crowded": 0.155,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "18:27",
                                "crowded": 0.1525,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "18:32",
                                "crowded": 0.19,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "18:35",
                                "crowded": 0.195,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "18:43",
                                "crowded": 0.2225,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "18:49",
                                "crowded": 0.255,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "18:56",
                                "crowded": 0.23,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "18:58",
                                "crowded": 0.24,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "19:03",
                                "crowded": 0.2375,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "19:14",
                                "crowded": 0.2075,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "19:19",
                                "crowded": 0.1775,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "19:26",
                                "crowded": 0.176666,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "19:32",
                                "crowded": 0.006666,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T18:37:00",
                "arrivalTime": "2024-03-28T19:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 273,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T19:13:00",
                        "departureTime": "2024-03-28T18:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T18:41:00",
                                "departureTime": "2024-03-28T18:41:00",
                                "platform": 2,
                                "crowded": 0.09
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T18:47:00",
                                "departureTime": "2024-03-28T18:47:00",
                                "platform": 1,
                                "crowded": 0.1425
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T18:57:00",
                                "departureTime": "2024-03-28T18:57:00",
                                "platform": 2,
                                "crowded": 0.1675
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T19:02:00",
                                "departureTime": "2024-03-28T19:02:00",
                                "platform": 1,
                                "crowded": 0.195
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T19:05:00",
                                "departureTime": "2024-03-28T19:05:00",
                                "platform": 1,
                                "crowded": 0.2075
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0575,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "18:37",
                                "crowded": 0.0575,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "18:41",
                                "crowded": 0.09,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "18:47",
                                "crowded": 0.1425,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "18:57",
                                "crowded": 0.1675,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "19:02",
                                "crowded": 0.195,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "19:05",
                                "crowded": 0.2075,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "19:13",
                                "crowded": 0.25,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "19:19",
                                "crowded": 0.3025,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "19:26",
                                "crowded": 0.2725,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "19:28",
                                "crowded": 0.3025,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "19:33",
                                "crowded": 0.3025,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "19:45",
                                "crowded": 0.275,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "19:50",
                                "crowded": 0.2275,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "19:57",
                                "crowded": 0.253333,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "20:02",
                                "crowded": 0.2,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "20:10",
                                "crowded": 0.17,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "20:20",
                                "crowded": 0.093333,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "20:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T19:07:00",
                "arrivalTime": "2024-03-28T19:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 275,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T19:43:00",
                        "departureTime": "2024-03-28T19:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T19:11:00",
                                "departureTime": "2024-03-28T19:11:00",
                                "platform": 2,
                                "crowded": 0.0775
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T19:17:00",
                                "departureTime": "2024-03-28T19:17:00",
                                "platform": 1,
                                "crowded": 0.1025
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T19:27:00",
                                "departureTime": "2024-03-28T19:27:00",
                                "platform": 2,
                                "crowded": 0.1125
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T19:32:00",
                                "departureTime": "2024-03-28T19:32:00",
                                "platform": 1,
                                "crowded": 0.135
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T19:35:00",
                                "departureTime": "2024-03-28T19:35:00",
                                "platform": 1,
                                "crowded": 0.1425
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0575,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "19:07",
                                "crowded": 0.0575,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "19:11",
                                "crowded": 0.0775,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "19:17",
                                "crowded": 0.1025,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "19:27",
                                "crowded": 0.1125,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "19:32",
                                "crowded": 0.135,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "19:35",
                                "crowded": 0.1425,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "19:43",
                                "crowded": 0.1725,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "19:49",
                                "crowded": 0.1975,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "19:56",
                                "crowded": 0.1825,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "19:58",
                                "crowded": 0.205,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "20:03",
                                "crowded": 0.195,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "20:14",
                                "crowded": 0.175,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "20:19",
                                "crowded": 0.185,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "20:26",
                                "crowded": 0.1425,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "20:32",
                                "crowded": 0.02,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T19:37:00",
                "arrivalTime": "2024-03-28T20:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 277,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T20:13:00",
                        "departureTime": "2024-03-28T19:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T19:41:00",
                                "departureTime": "2024-03-28T19:41:00",
                                "platform": 2,
                                "crowded": 0.05
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T19:47:00",
                                "departureTime": "2024-03-28T19:47:00",
                                "platform": 1,
                                "crowded": 0.0775
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T19:57:00",
                                "departureTime": "2024-03-28T19:57:00",
                                "platform": 2,
                                "crowded": 0.105
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T20:02:00",
                                "departureTime": "2024-03-28T20:02:00",
                                "platform": 1,
                                "crowded": 0.1175
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T20:05:00",
                                "departureTime": "2024-03-28T20:05:00",
                                "platform": 1,
                                "crowded": 0.1275
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.035,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "19:37",
                                "crowded": 0.035,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "19:41",
                                "crowded": 0.05,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "19:47",
                                "crowded": 0.0775,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "19:57",
                                "crowded": 0.105,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "20:02",
                                "crowded": 0.1175,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "20:05",
                                "crowded": 0.1275,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "20:13",
                                "crowded": 0.1475,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "20:19",
                                "crowded": 0.1775,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "20:26",
                                "crowded": 0.17,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "20:28",
                                "crowded": 0.1925,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "20:33",
                                "crowded": 0.195,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "20:45",
                                "crowded": 0.18,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "20:50",
                                "crowded": 0.165,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "20:57",
                                "crowded": 0.1475,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "21:02",
                                "crowded": 0.115,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "21:10",
                                "crowded": 0.0975,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "21:20",
                                "crowded": 0.055,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "21:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T20:07:00",
                "arrivalTime": "2024-03-28T20:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 279,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T20:43:00",
                        "departureTime": "2024-03-28T20:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T20:11:00",
                                "departureTime": "2024-03-28T20:11:00",
                                "platform": 2,
                                "crowded": 0.0525
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T20:17:00",
                                "departureTime": "2024-03-28T20:17:00",
                                "platform": 1,
                                "crowded": 0.08
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T20:27:00",
                                "departureTime": "2024-03-28T20:27:00",
                                "platform": 2,
                                "crowded": 0.115
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T20:32:00",
                                "departureTime": "2024-03-28T20:32:00",
                                "platform": 1,
                                "crowded": 0.13
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T20:35:00",
                                "departureTime": "2024-03-28T20:35:00",
                                "platform": 1,
                                "crowded": 0.135
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.04,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "20:07",
                                "crowded": 0.04,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "20:11",
                                "crowded": 0.0525,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "20:17",
                                "crowded": 0.08,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "20:27",
                                "crowded": 0.115,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "20:32",
                                "crowded": 0.13,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "20:35",
                                "crowded": 0.135,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "20:43",
                                "crowded": 0.15,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "20:49",
                                "crowded": 0.17,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "20:56",
                                "crowded": 0.1225,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "20:58",
                                "crowded": 0.125,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "21:03",
                                "crowded": 0.1175,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "21:14",
                                "crowded": 0.1025,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "21:19",
                                "crowded": 0.0775,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "21:26",
                                "crowded": 0.055,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "21:32",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T20:37:00",
                "arrivalTime": "2024-03-28T21:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 281,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T21:13:00",
                        "departureTime": "2024-03-28T20:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T20:41:00",
                                "departureTime": "2024-03-28T20:41:00",
                                "platform": 2,
                                "crowded": 0.0525
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T20:47:00",
                                "departureTime": "2024-03-28T20:47:00",
                                "platform": 1,
                                "crowded": 0.07
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T20:57:00",
                                "departureTime": "2024-03-28T20:57:00",
                                "platform": 2,
                                "crowded": 0.08
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T21:02:00",
                                "departureTime": "2024-03-28T21:02:00",
                                "platform": 1,
                                "crowded": 0.09
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T21:05:00",
                                "departureTime": "2024-03-28T21:05:00",
                                "platform": 1,
                                "crowded": 0.0875
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.045,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "20:37",
                                "crowded": 0.045,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "20:41",
                                "crowded": 0.0525,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "20:47",
                                "crowded": 0.07,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "20:57",
                                "crowded": 0.08,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "21:02",
                                "crowded": 0.09,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "21:05",
                                "crowded": 0.0875,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "21:13",
                                "crowded": 0.0975,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "21:19",
                                "crowded": 0.12,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "21:26",
                                "crowded": 0.105,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "21:28",
                                "crowded": 0.16,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "21:33",
                                "crowded": 0.1675,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "21:45",
                                "crowded": 0.15,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "21:50",
                                "crowded": 0.1325,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "21:57",
                                "crowded": 0.11,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "22:02",
                                "crowded": 0.09,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "22:10",
                                "crowded": 0.07,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "22:20",
                                "crowded": 0.045,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "22:31",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T21:07:00",
                "arrivalTime": "2024-03-28T21:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 283,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T21:43:00",
                        "departureTime": "2024-03-28T21:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T21:11:00",
                                "departureTime": "2024-03-28T21:11:00",
                                "platform": 2,
                                "crowded": 0.075
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T21:17:00",
                                "departureTime": "2024-03-28T21:17:00",
                                "platform": 1,
                                "crowded": 0.105
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T21:27:00",
                                "departureTime": "2024-03-28T21:27:00",
                                "platform": 2,
                                "crowded": 0.12
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T21:32:00",
                                "departureTime": "2024-03-28T21:32:00",
                                "platform": 1,
                                "crowded": 0.1325
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T21:35:00",
                                "departureTime": "2024-03-28T21:35:00",
                                "platform": 1,
                                "crowded": 0.13
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0625,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "21:07",
                                "crowded": 0.0625,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "21:11",
                                "crowded": 0.075,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "21:17",
                                "crowded": 0.105,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "21:27",
                                "crowded": 0.12,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "21:32",
                                "crowded": 0.1325,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "21:35",
                                "crowded": 0.13,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "21:43",
                                "crowded": 0.135,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "21:49",
                                "crowded": 0.1575,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "21:56",
                                "crowded": 0.1375,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "21:58",
                                "crowded": 0.19,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "22:03",
                                "crowded": 0.1875,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "22:14",
                                "crowded": 0.165,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "22:19",
                                "crowded": 0.155,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "22:26",
                                "crowded": 0.13,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "22:31",
                                "crowded": 0.085,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "22:40",
                                "crowded": 0.08,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "22:50",
                                "crowded": 0.0475,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "23:01",
                                "crowded": 0,
                                "platform": 4
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T22:07:00",
                "arrivalTime": "2024-03-28T22:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 287,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T22:43:00",
                        "departureTime": "2024-03-28T22:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T22:11:00",
                                "departureTime": "2024-03-28T22:11:00",
                                "platform": 2,
                                "crowded": 0.0675
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T22:17:00",
                                "departureTime": "2024-03-28T22:17:00",
                                "platform": 1,
                                "crowded": 0.0925
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T22:27:00",
                                "departureTime": "2024-03-28T22:27:00",
                                "platform": 2,
                                "crowded": 0.1125
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T22:32:00",
                                "departureTime": "2024-03-28T22:32:00",
                                "platform": 1,
                                "crowded": 0.12
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T22:35:00",
                                "departureTime": "2024-03-28T22:35:00",
                                "platform": 1,
                                "crowded": 0.12
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.0575,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "22:07",
                                "crowded": 0.0575,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "22:11",
                                "crowded": 0.0675,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "22:17",
                                "crowded": 0.0925,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "22:27",
                                "crowded": 0.1125,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "22:32",
                                "crowded": 0.12,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "22:35",
                                "crowded": 0.12,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "22:43",
                                "crowded": 0.1175,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "22:49",
                                "crowded": 0.13,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "22:56",
                                "crowded": 0.1175,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "22:58",
                                "crowded": 0.1825,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "23:03",
                                "crowded": 0.185,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "23:14",
                                "crowded": 0.165,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "23:19",
                                "crowded": 0.1275,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "23:26",
                                "crowded": 0.11,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "23:31",
                                "crowded": 0.0675,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "23:40",
                                "crowded": 0.0575,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "23:50",
                                "crowded": 0.0275,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "00:01",
                                "crowded": 0,
                                "platform": 4
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T22:37:00",
                "arrivalTime": "2024-03-28T23:13:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 289,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T23:13:00",
                        "departureTime": "2024-03-28T22:37:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T22:41:00",
                                "departureTime": "2024-03-28T22:41:00",
                                "platform": 2,
                                "crowded": 0.016666
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T22:47:00",
                                "departureTime": "2024-03-28T22:47:00",
                                "platform": 1,
                                "crowded": 0.026666
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T22:57:00",
                                "departureTime": "2024-03-28T22:57:00",
                                "platform": 2,
                                "crowded": 0.036666
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T23:02:00",
                                "departureTime": "2024-03-28T23:02:00",
                                "platform": 1,
                                "crowded": 0.043333
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T23:05:00",
                                "departureTime": "2024-03-28T23:05:00",
                                "platform": 1,
                                "crowded": 0.043333
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.013333,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "22:37",
                                "crowded": 0.013333,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "22:41",
                                "crowded": 0.016666,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "22:47",
                                "crowded": 0.026666,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "22:57",
                                "crowded": 0.036666,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "23:02",
                                "crowded": 0.043333,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "23:05",
                                "crowded": 0.043333,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "23:13",
                                "crowded": 0.046666,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "23:19",
                                "crowded": 0.05,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "23:26",
                                "crowded": 0.03,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "23:28",
                                "crowded": 0.04,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "23:33",
                                "crowded": 0.036666,
                                "platform": 3
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "23:44",
                                "crowded": 0.03,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "23:49",
                                "crowded": 0.023333,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "23:56",
                                "crowded": 0.02,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "00:02",
                                "crowded": 0,
                                "platform": 3
                            }
                        ]
                    }
                ]
            },
            {
                "departureTime": "2024-03-28T23:07:00",
                "arrivalTime": "2024-03-28T23:43:00",
                "freeSeats": 0,
                "travelMessages": [],
                "trains": [
                    {
                        "trainNumber": 291,
                        "orignStation": 2800,
                        "destinationStation": 3500,
                        "originPlatform": 3,
                        "destPlatform": 4,
                        "freeSeats": 0,
                        "arrivalTime": "2024-03-28T23:43:00",
                        "departureTime": "2024-03-28T23:07:00",
                        "stopStations": [
                            {
                                "stationId": 2820,
                                "arrivalTime": "2024-03-28T23:11:00",
                                "departureTime": "2024-03-28T23:11:00",
                                "platform": 2,
                                "crowded": 0.0375
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "2024-03-28T23:17:00",
                                "departureTime": "2024-03-28T23:17:00",
                                "platform": 1,
                                "crowded": 0.05
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "2024-03-28T23:27:00",
                                "departureTime": "2024-03-28T23:27:00",
                                "platform": 2,
                                "crowded": 0.0625
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "2024-03-28T23:32:00",
                                "departureTime": "2024-03-28T23:32:00",
                                "platform": 1,
                                "crowded": 0.065
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "2024-03-28T23:35:00",
                                "departureTime": "2024-03-28T23:35:00",
                                "platform": 1,
                                "crowded": 0.075
                            }
                        ],
                        "handicap": 1,
                        "crowded": 0.035,
                        "trainPosition": null,
                        "routeStations": [
                            {
                                "stationId": 2800,
                                "arrivalTime": "23:07",
                                "crowded": 0.035,
                                "platform": 3
                            },
                            {
                                "stationId": 2820,
                                "arrivalTime": "23:11",
                                "crowded": 0.0375,
                                "platform": 2
                            },
                            {
                                "stationId": 3100,
                                "arrivalTime": "23:17",
                                "crowded": 0.05,
                                "platform": 1
                            },
                            {
                                "stationId": 3300,
                                "arrivalTime": "23:27",
                                "crowded": 0.0625,
                                "platform": 2
                            },
                            {
                                "stationId": 3310,
                                "arrivalTime": "23:32",
                                "crowded": 0.065,
                                "platform": 1
                            },
                            {
                                "stationId": 3400,
                                "arrivalTime": "23:35",
                                "crowded": 0.075,
                                "platform": 1
                            },
                            {
                                "stationId": 3500,
                                "arrivalTime": "23:43",
                                "crowded": 0.08,
                                "platform": 4
                            },
                            {
                                "stationId": 3600,
                                "arrivalTime": "23:49",
                                "crowded": 0.085,
                                "platform": 2
                            },
                            {
                                "stationId": 3700,
                                "arrivalTime": "23:56",
                                "crowded": 0.08,
                                "platform": 4
                            },
                            {
                                "stationId": 4600,
                                "arrivalTime": "23:58",
                                "crowded": 0.1225,
                                "platform": 2
                            },
                            {
                                "stationId": 4900,
                                "arrivalTime": "00:03",
                                "crowded": 0.13,
                                "platform": 3
                            },
                            {
                                "stationId": 4800,
                                "arrivalTime": "00:12",
                                "crowded": 0.12,
                                "platform": 2
                            },
                            {
                                "stationId": 5150,
                                "arrivalTime": "00:17",
                                "crowded": 0.1125,
                                "platform": 2
                            },
                            {
                                "stationId": 5000,
                                "arrivalTime": "00:22",
                                "crowded": 0.0925,
                                "platform": 3
                            },
                            {
                                "stationId": 5300,
                                "arrivalTime": "00:29",
                                "crowded": 0.0825,
                                "platform": 2
                            },
                            {
                                "stationId": 5200,
                                "arrivalTime": "00:34",
                                "crowded": 0.055,
                                "platform": 1
                            },
                            {
                                "stationId": 5410,
                                "arrivalTime": "00:43",
                                "crowded": 0.05,
                                "platform": 1
                            },
                            {
                                "stationId": 5800,
                                "arrivalTime": "00:53",
                                "crowded": 0.0225,
                                "platform": 3
                            },
                            {
                                "stationId": 5900,
                                "arrivalTime": "01:04",
                                "crowded": 0,
                                "platform": 4
                            }
                        ]
                    }
                ]
            }
        ]
    }
}



function Results() {
  const [trainData, setTrainData] = useState(null);

  async function fetchTrainData() {
    setTrainData(trainList)
    console.log(trainList);
  }

  return (
    <div>
      <button onClick={fetchTrainData}>Get Train Data</button>
    </div>
  );
}

export default Results;
