from flask import Flask,request,render_template,redirect,url_for
from mailjet_rest import Client
import os
api_key = 'faa02a5210ac08f24e8ea480b1091d44'
api_secret = 'd4c9538421a4425894a9a9c9f5c3394b'
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
# 
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
    data = {
        'Messages': [
        {
            "From": {
            "Email": "fulfil@paripurnalife.com",
            "Name": "Fulfil"
            },
            "To": [
            {
            "Email": xt[0],
            "Name": xt[1]
            }
            ],
            "Subject": "💥 PARIPURNA LIFE 💥 Quiz Result 💥Discover your 360 Degree Persona 💥",
            "TextPart": "Your Result",
            "HTMLPart": ' <a href="https://paripurnalife.com/" ><h1 style="color: #90178a" ;>#पारिपूर्णLIFE</h1></a > <h1 style="text-align: center"> <span style="background: #fff; color: #90178a" >Your unique 360-degree Persona with your current vibes and your ultimate life purpose!</span > </h1> <p style="text-align: center">Your Ultimate Purpose Persona Epitome is</p> <p style="text-align: center"><mark>'+xt[5]+'</mark></p> <p style="text-align: center">And your Current Vibes are</p> <p style="text-align: center"><mark>'+ xt[2] +'</mark></p> <p style="text-align: center"> Your Current Emotions and intellect quotient is </p> <p style="text-align: center"><mark>'+ re40 +'/'+ re3 +'</mark></p> <br /> <p style="text-align: center">YOU ARE HERE TO</p> <p style="text-align: center"><mark>'+ re5 +'</mark></p> <h2 style="text-align: center"> You are one of the unique combination and has excellent persona, but you need some alignment work done for that.Learn more on how to achieve your ultimate life purpose in detail and create your Magical Persona. </h2> <p style="text-align: center">&#10070; What is your Epitome</p> <p style="text-align: center"> &#10070; How to walk on your purpose Epitome </p> <p style="text-align: center"> &#10070; How you can overcome the major emotional and intellectual obstacles those you are reflecting strongly </p> <p style="text-align: center"> &#10070; The ultimate way to head towards Purpose </p> <p style="text-align: center"> &#10070; How you can discover your Ultimate Purpose by 7 step-by-step formula </p> <p style="text-align: center"> &#10070; How you can make work your chakra and Kosha for your Purpose </p> <p style="text-align: center">&#10070; How to overcome- over-whelming</p> <p style="text-align: center"> &#10070; How you can select or fix your purpose </p> <br /><br /><br /> <div style="text-align: center"> I am ready to discover my Ultimate Life Purpose with you </div> <h1 style="text-align: center"> <span style="background: #fff; color: #90178a" >Book your session now by sending email on fulfil@paripurnalife.com</span > </h1> <h2 style="text-align: center">What session will Have</h2> <p style="text-align: center">1.Free your limitations technique</p> <p style="text-align: center">2.Verbalization</p> <p style="text-align: center">3.Visualization</p> <p style="text-align: center">4.Body Energizations</p> <p style="text-align: center">5.Find your Purpose Epitome</p> <p style="text-align: center">6.Blueprint of Your Ultimate Purpose</p> <p style="text-align: center"> 7.Balance your Emotional and Intelligent quotient </p><a style="text-decoration: none; color: #90178a;" href="https://paripurnalife.com/links-paripurna-life/">Thanks for taking this quiz, we are updating more information on how to discover your ultimate persona, <br>please click here to keep in touch with us.</a>',
            "CustomID": "AppGettingStartedTest"
        }
        ]
    }
    result = mailjet.send.create(data=data)
    return render_template("result.html",xt=xt,re40=re40,re5=re5,re3=re3)

if __name__ == '__main__':
    app.run()