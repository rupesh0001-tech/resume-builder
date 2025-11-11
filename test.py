que = []

# Add an Event: When a new event occurs, it should be added to the event queue. 
#  Process the Next Event: The system should process and remove the event that has been in the 
# queue the longest.  
#  Display Pending Events: Show all the events currently waiting to be processed. 
#  Cancel an Event: An event can be canceled if it has not been processed

def addEvent(event):
    que.append(event)
    print('new event added ')


def processEvent(): 
   processEvent =  que.pop(0)
   print(f' the processed event is {processEvent}')

def displayEvents():
    print('pending events')
    for i in range(len(que) ):
        print(que[i])


def cancelEvent(event): 
    que.remove(event)

isTrue = True


while isTrue : 
    choice = int(input('input your choice : '))
    if(choice == 1 ):
        event = input('input your choice : ')
        addEvent(event)

    elif(choice == 2):
        processEvent()

    elif(choice == 3):
        displayEvents()

    elif(choice == 4): 
        event = input('input your choice : ')
        cancelEvent(event)
    elif(choice == 5):
        isTrue = False
    


