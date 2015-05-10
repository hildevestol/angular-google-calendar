## Google calendar directive

A demo is provided in demo

### Use

- Copy files in `dist`
  - Make sure u check if the templateUrl path is correct based on your placement of the file, the template file is currently hardcoded to the folder based in this repo
- Add module to your angular app
  - `angular.module('YourApp', ['GoogleCalendar'])`
  - If u want to use html on description also add `ngSanitizer`: `angular.module('YourApp', ['GoogleCalendar', 'ngSanitize'])`
- Add this to your html where u want it displayed
  - `<google-calendar gc-config="{ google_key: 'YourPublicGoogleAPIKey', calendar_id: 'YourGoogleCalendarID'}"></google-calendar>`

#### Options

Default options is

````javascript
max: 5,
hideTitle: false,
dateTimeFilter: 'd. MMM HH.mm',
dateFilter: 'd. MMM',
htmlDesc: false,
calendar_name: false
````

**Overrides**

- `max`: Set the max entries you want to fetch from google
- `hideTitle`: If u don't want to display a title for your calendar. Default is displaying the name provided for the calendar in google. U can also override this by providing `calendar_name`
- `htmlDesc`: set to tru if u want to sanitize and use html from calendar description (requires `ngSanitizer`)

````javascript
hideTitle: false,
calendar_name: 'A title for you calendar'
google_key: 'AIzaSyDI9VA5xCt8FMDZV1eZuyuf2ODimyI4kfQ',
calendar_id: 'v9htojeol66f34jh3d6o8cohss@group.calendar.google.com',
htmlDesc: true,
max: 10
````

#### CSS

The template is as below, and you can style this with their css-classes

````html
<h1 data-ng-if="gcConfig.calendar_name">{{ gcConfig.calendar_name }}</h1>
<div class="events" data-ng-repeat="event in calendar.items">
  <div class="event-title">{{ ::event.summary }}</div>
  <div class="datetime">
    {{ start(event) }} - {{ end(event) }}
  </div>
  <div class="description" data-ng-if="gcConfig.sanitize && gcConfig.htmlDesc" data-ng-bind-html="event.description"></div>
  <div class="description" data-ng-if="!(gcConfig.sanitize && gcConfig.htmlDesc)">{{ event.description }}</div>
</div>

````
