'use strict';

angular.module('feedbacks').
    component('feedbacks', {
        templateUrl: '/app/feedbacks/feedbacks.html',
        controller: function($scope){
            $scope.article = article;
            $scope.category = category;
            $scope.questions = questions;
            $scope.answers = answers;
        }
    });

    // let category = [
    //     "Getting Started",
    //     "Security",
    //     "Functionality",
    //     "Monitoring",
    //     "Billing"
    // ];

    // let article = [
    //     {
    //         name: 'What is 101Cloud?',
    //         category: 'Getting Started',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'How to Register?',
    //         category: 'Getting Started',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Invite Your Team',
    //         category: 'Getting Started',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Adding new users to the portal',
    //         category: 'Getting Started',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'How often will data get refreshed?',
    //         category: 'Getting Started',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Dashboards',
    //         category: 'Monitoring',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'How admin credentials are gathered and stored?',
    //         category: 'Security',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Does 101Cloud system admins have access to Office 365 customer data?',
    //         category: 'Security',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Invoice Templates',
    //         category: 'Billing',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Payments',
    //         category: 'Billing',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Contract & Subscriptions with Partners and Customers',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'License Ordering & Management',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Autometed Deployment & Configurations',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Operations',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'User Management',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Clouds',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Servers',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Services',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Datacenters',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Locations',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     },
    //     {
    //         name: 'Subscriptions',
    //         category: 'Functionality',
    //         text: '101cloud vereint das Beste aus allen Clouds – für Kunden, Partner und Systemintegratoren. 101cloud hat Integration und Deployment vollständig automatisiert. Sie profitieren von den Vorteilen der Cloud wie schnelle «Time to market» und «Pay-as-you-go»: in Minuten, nach höchsten Sicherheitsstandards und vollkommen kostentransparent.'
    //     }
    // ];

    // let questions = [
    //     {
    //         author: 'Dan Brown',
    //         date: '18.01.2017 4:05 PM',
    //         title: 'First Theme',
    //         category: 'Getting started',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien'
    //     },
    //     {
    //         author: 'Dan Brown',
    //         date: '18.01.2017 4:05 PM',
    //         title: 'Second Theme',
    //         category: 'Getting started',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien'
    //     }
    // ];

    // let answers = [
    //     {
    //         author: 'Sam Johns',
    //         date: '18.01.2017 7:05 PM',
    //         title: 'First Theme',
    //         category: 'Getting started',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.'
    //     },
    //     {
    //         author: 'Anna Stanford',
    //         date: '18.01.2017 7:05 PM',
    //         title: 'Second Theme',
    //         category: 'Getting started',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus'
    //     },
    //     {
    //         author: 'Sam Johns',
    //         date: '18.01.2017 7:05 PM',
    //         title: 'Second Theme',
    //         category: 'Getting started',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,'
    //     }
    // ]