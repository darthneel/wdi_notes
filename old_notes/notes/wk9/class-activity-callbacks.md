#Callback Functions

- Each student is an "Event Binding".  The name of an event and holds the name of a function.
- When their event occurs they do their function.  Event Binding Names:
	- Click
	- Hover
	- Scroll
	- Resize
	- Load (always first)
	
- One student is writing the program and giving function cards to event binding students:
- Each binding student holds a card with the name of a function:
	- Jump
	- Spin
	- Dance
	- Wave

- One Student is the event-firer and has stack of event name cards with each event's name
- When the student draws a new card, the event binding must perform their function.


#Part 2: Parameters
- Functions become more complicated:
	- Functions Take Parameters
	- Functions Talk to the Web
	
###actors_of(movie):
	- Get the list of actors in a Movie (using IMDB)
	- Read it aloud
###members_of(band)
	- Get the members of a band (using Last.fm or Wikipedia)
	- Read their names aloud
###capital_of(state)
	- Get the capital of a state (from memory)
	- Say it aloud
	
#Part 3: Events Become Abstract
- Events don't have to be called by the user, they can be called by other parts of the application.
- Three more students standup:
	- BandModel
		- Keeps The Blueprint of a Band
	- BandListCollection
		- Keeps track of all bands that exist
	- BandView
		- Keeps track of what the element on the page looks like
- Event Firer now interacts with the state of the application
- Event cards are given to event-binding students
- New Events
	- DataChange
	- Remove
	- Add
	- Destroy
	- Render
	- Initialize