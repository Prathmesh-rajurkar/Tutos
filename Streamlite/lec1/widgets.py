import streamlit as st 
import pandas as pd 

st.title("Streamlit Text Input")

name = st.text_input("Enter your name : ")


age = st.slider("Select Your Age ",0,100,18)

opts = ["Python","Java","JavaScript","C++"]
choice = st.selectbox("Choose Your Favorite Language :",opts)

if name :
    st.write(f"Hello, {name}")

if age:
    st.write(f"Your age is {age}")

uploaded_file = st.file_uploader("Choose a CSV file ",type="csv")

if uploaded_file is not None:
    df =pd.read_csv(uploaded_file)
    st.write(df)