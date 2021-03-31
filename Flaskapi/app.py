from flask import Flask,request,render_template,redirect,url_for
from mailjet_rest import Client
import os
api_key = 'ab7bf40ef737993df803847be1b37660'
api_secret = '19bed21a2c04bb0e3bb1d27878a04e84'
mailjet = Client(auth=(api_key, api_secret), version='v3.1')
app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('home.html')

@app.route('/submit',methods=['post'])
def submit():
    xt=[str(x) for x in request.form.values()]
    print(xt)
    data = {
        'Messages': [
        {
            "From": {
            "Email": "parthasai88@gmail.com",
            "Name": "Paripurna"
            },
            "To": [
            {
            "Email": xt[0],
            "Name": xt[1]
            }
            ],
            "Subject": "Greetings from Connections",
            "TextPart": "Your Result",
            "HTMLPart": `











            `,
            "CustomID": "AppGettingStartedTest"
        }
        ]
    }
    result = mailjet.send.create(data=data)
    return 'Thank you for taking quiz...'+  +' Please check your mail'

if __name__ == '__main__':
    app.run()