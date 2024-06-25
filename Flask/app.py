from flask import Flask ,render_template,request,redirect,url_for,jsonify


app = Flask(__name__)



@app.route("/", methods=["GET"])
def welcome():
    return "<h1>Welcome to FLASK TUTORIAL</h1>"

@app.route("/index",methods=["GET", "POST"])
def index():
    return "<h1>Welcome to Index Page</h1>"

@app.route("/success/<int:score>", methods=["GET"])
def success(score):
    return f"The person has passed and the score is :  {score}"

@app.route("/failure/<int:score>", methods=["GET"])
def fail(score):
    return f"The person has passed and the score is :  {score}"

@app.route("/form", methods=["GET", "POST"])
def form():
    if request.method == "GET":
        return render_template('form.html')
    else:
        maths = float(request.form['maths'])
        science = float(request.form['science'])
        history = float(request.form['history'])

        average = (maths+science+history)/3

        if average >= 50:
            res="success"
        else:
            res="fail"

        return redirect(url_for(res,score=average))
        # return render_template('form.html', average=average)

@app.route("/api",methods=["POST"])
def calculate_sum():
    data = request.get_json()
    a_val=float(dict(data)["a"])
    b_val=float(dict(data)["b"])
    return jsonify(a_val+b_val)
















if __name__ == '__main__':
    app.run(debug=True)