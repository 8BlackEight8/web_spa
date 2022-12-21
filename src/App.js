import React from 'react';
import './App.css';
import ActivityCard from "./ActivityCard";

function App() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return (
      <div className="activities">
        <ActivityCard
            activity = {{
              name: "Activity #1",
              desc: "Desc #1",
              category: "Category #1",
              date: (day + 2) + '.' + month + '.' + year,
              city: "City #1",
              place: "Place #1"
            }}
        />
        <ActivityCard
            activity = {{
              name: "Activity #2",
              desc: "Desc #2",
              category: "Category #2",
              date: (day + 3) + '.' + (month + 1) + '.' + year,
              city: "City #2",
              place: "Place #2"
            }}
        />
        <ActivityCard
            activity = {{
              name: "Activity #3",
              desc: "Desc #3",
              category: "Category #3",
              date: (day) + '.' + (month + 2) + '.' + year,
              city: "City #3",
              place: "Place #3"
            }}
        />
        <ActivityCard
            activity = {{
              name: "Activity #4",
              desc: "Desc #4",
              category: "Category #4",
              date: (day + 2) + '.' + (month + 2) + '.' + year,
              city: "City #4",
              place: "Place #4"
            }}
        />
        <ActivityCard
            activity = {{
              name: "Activity #5",
              desc: "Desc #5",
              category: "Category #5",
              date: (day + 15) + '.' + (month + 2) + '.' + year,
              city: "City #5",
              place: "Place #5"
            }}
        />
      </div>
  );
}

export default App;