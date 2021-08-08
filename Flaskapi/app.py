from flask import Flask,request,render_template,redirect,url_for
from mailjet_rest import Client
import os
import pymongo
from pymongo import MongoClient
from datetime import datetime
cluster= MongoClient("mongodb+srv://dbuser:HEiaTmjDrHflwyRC@cluster0.fxhey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db=cluster["quiz"]
collecion= db["responses"]
api_key = '0029ac0e3471d863cff5b6b80a9a7479'
api_secret = 'd695a1e1fc42e38ee77a1e3e70b87a1d'
mailjet = Client(auth=(api_key, api_secret), version='v3.1')
app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('home.html')

@app.route('/submit',methods=['post'])
def submit():
    xt=[str(x) for x in request.form.values()]
    print(xt)
    re40 = ''
    re5 = ''
    re3 = ''
    if(xt[6] != 'https://paripurnalife.com/discoveryour360degreepersona/'):
        return "worng domain"
    if(xt[3] == 'ISTJ'):
        re3 = 'Truth-Seeker'
    if(xt[3] == 'ISFJ'):
        re3 = 'Protector'
    if(xt[3] == 'INFJ'):
        re3 = 'Advocate'
    if(xt[3] == 'INTJ'):
        re3 = 'Builder'
    if(xt[3] == 'ISTP'):
        re3 = 'Genius'
    if(xt[3] == 'ISFP'):
        re3 = 'Adventurer'
    if(xt[3] == 'INFP'):
        re3 = 'Mediator'
    if(xt[3] == 'INTP'):
        re3 = 'Logistician'
    if(xt[3] == 'ESTP'):
        re3 = 'Entrepreneur'
    if(xt[3] == 'ESFP'):
        re3 = 'Entertainer'
    if(xt[3] == 'ENFP'):
        re3 = 'Activist'
    if(xt[3] == 'ENTP'):
        re3 = 'Debater'
    if(xt[3] == 'ESTJ'):
        re3 = 'Executive'
    if(xt[3] == 'ESFJ'):
        re3 = 'Diplomat'
    if(xt[3] == 'ENFJS'):
        re3 = 'Central Character'
    if(xt[3] == 'ENTJ'):
        re3 = 'Commander'

    if(xt[4] == '1'):
        re40 = 'Fear'
    if(xt[4] == '2'):
        re40 = 'Anger/Rage/Violet/Resentment'
    if(xt[4] == '3'):
        re40 = 'Worry/Guilt'
    if(xt[4] == '4'):
        re40 = 'Opinioned'
    if(xt[4] == '5'):
        re40 = 'Indecision/Uncertainty'
    if(xt[4] == '6'):
        re40 = 'Grief/Sadness/Depression'
    if(xt[4] == '7'):
        re40 = 'Not in the Prasent'
    if(xt[4] == '8'):
        re40 = 'Mental and Pysical Exhaustion'
    if(xt[4] == '9'):
        re40 = 'Extreme Love'
    if(xt[4] == '10'): 
        re40 = 'Self Guilt'
    if(xt[5] == 'RESEARCHER'):
        re5 = 'OBSERVE THE WORLD, THE OBJECT OF WORLD’S STUDY, TO BE ANALYZED THROUGH YOUR LENS.'
    if(xt[5] == 'ACTIVIST'):
        re5 = 'ACTIVIST  BE A BRIDGE FOR THE NEW PROTOTYPE.'
    if(xt[5] == 'EDUCATOR / TEACHER'):
        re5 = 'TEACH THE EXPERIENCES YOU UNDERGO.'
    if(xt[5] == 'IDEALISTIC / ACTIVIST '):
        re5 = 'BRING ABOUT SOCIAL, ENVIRONMENTAL, OR POLITICAL CHANGE.'
    if(xt[5] == 'ARTIST'):
        re5 = 'CREATE BEAUTY'
    if(xt[5] == 'PERFORMER / ENTERTAINER'):
        re5 = 'MAKE OTHERS LAUGH, CRY, SMILE, GASP, PONDER, AND EVERY EMOTION IN BETWEEN.'
    if(xt[5] == 'WARRIOR'):
        re5 = 'PROTECT'
    if(xt[5] == 'NURTURER'):
        re5 = 'CARE AND CONNECT. YOU FOUND YOUR SENSE OF PURPOSE IN NURTURING OTHERS.'
    if(xt[5] == 'BUSINESSPERSON / ENTREPRENUER'): 
        re5 = 'BUSINESSPERSON / ENTREPRENUER - ADDRESS THE PROBLEMS OF SOCIETY THROUGH BUSINESS SOLUTIONS'
    if(re5 == '' or re40 == '' or re3 == ''):
        return "better luck next time lollll"
    # else:
    #     data = {
    #         'Messages': [
    #         {
    #             "From": {
    #             "Email": "paripurnalifefulfil@gmail.com",
    #             "Name": "Fulfil"
    #             },
    #             "To": [
    #             {
    #             "Email": xt[0],
    #             "Name": xt[1]
    #             }
    #             ],
    #             "Subject": "💥 PARIPURNA LIFE 💥 Quiz Result 💥Discover your 360 Degree Persona 💥",
    #             "TextPart": "Your Result",
    #             "HTMLPart": '  <style> body { font-family: "Montserrat", sans-serif; } body a { text-decoration: none; font-family: "Montserrat", sans-serif; } .container { padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; } @media (min-width: 768px) { .container { width: 750px; } } @media (min-width: 992px) { .container { width: 970px; } } @media (min-width: 1200px) { .container { width: 1170px; } } .p-1 { padding: 0.25rem; background-color: #f6eabe; } .text-center { text-align: center !important; } .mt-5 { margin-top: 3rem; } .mb-5 { margin-bottom: 3rem; } </style> <div class="container mt-5"> <a href="https://paripurnalife.com/"> <h1 style="color: #bc9c22;">Paripūrṇa Life <sup>TM</sup></h1> </a> <div class="pb-4 text-center"> <h2> <span class="p-1"> <b>Welcome to Paripurna Lifes</b></span></h2> <h3>Discover Your 360 Degree Luminosity of Mind and Body </h3> <h1> <span class="p-1"><b>Namaste!</b></span></h1> <h3>As per your answers, below are your Analysis of current luminosity of Mind & Body </h3> <h3>Your Ultimate <span class="p-1"> VIHAR</span> is</h3> <p><mark>'+xt[5]+'</mark></p> <h3>And your Current <span class="p-1"> Achar</span> are</h3> <p><mark>'+ xt[2] +'</mark></p> <h3> Your Current <span class="p-1"> Vichar</span> is</h3> <p><mark>'+ re40 +'/'+ re3 +'</mark></p> <h3>You are here to</h3> <p><mark>'+ re5 +'</mark></p> <br> <h2> <span class="p-1"><b>WOW!</b></span></h2> <br> <h3> You are one of the unique combination of as stated above. </h3> <br> <h3> Do you want to know more on your results? </h3> <h3> Jump <a href="https://paripurnalife.com/ecosystemofparipurnalife">here</a> to know more on the analysis of and know more about it. </h3> <br> <h3> Now it’s your time to be on this pathway and unlock the pathway of Golden Door of Fulfilments. </h3> <br> <h3>Join The Free Webinar here</h3> <h3><a href="https://paripurnalife.com/ecosystemofparipurnalife">Thanks for Taking the Quiz. See you in the Free Webinar! </a> </h3> <br> <h2 class="mb-5"><b>Thank you! We are waiting for you at the Webinar, See you there! </b></h2> </div> </div>',
    #             "CustomID": "AppGettingStartedTest"
    #         }
    #         ]
    #     }
    # result = mailjet.send.create(data=data)
    now = datetime.now()
    date_time = now.strftime("%d/%m/%Y, %H:%M:%S")
    collecion.insert_one({
        "time": str(date_time),
        "email": xt[0],
        "name": xt[1],
        "VIHAR": xt[5],
        "Achar": xt[2],
        "Vichar": re40 +'/'+re3,
        "you r here": re5
    })
    return render_template("result.html",xt=xt,re40=re40,re5=re5,re3=re3)

if __name__ == '__main__':
    app.run()