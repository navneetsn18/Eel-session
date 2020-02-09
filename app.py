import eel
eel.init('web')
session=0
@eel.expose
def loginpy(username,password):
    global session
    if(username=="navneet" and password=="1234"):
        session=1
        return session
    else:
        return session

@eel.expose
def logoutpy():
    global session
    session=0


@eel.expose
def checkSessionpy():
    global session
    return session

eel.start('login.html')