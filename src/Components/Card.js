import React from 'react'
import SelectedPlan from './SelectedPlan'

export default function Card() {
    return (
        <div className="card">
            <div className="card-content">
            <h2>
  Order Summary
            </h2>
            <p>
            You can now listen to millions of songs, audiobooks, and podcasts on any 
  device anywhere you like!
            </p>
            <SelectedPlan plan='Annual Plan' fee="$59.99/year"/>
            <button className="confirm">
  Proceed to Payment
            </button>
            
            <button className="cancel">
  Cancel Order
            </button> 
            </div>
        </div>
    )
}
