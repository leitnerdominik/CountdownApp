import React from 'react';

const modal = (props) => (
    <div className="modal">
        <div className="modal_timer">
            00h 00m 00s
        </div>
        <div className="modal_numbers">
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div>
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <div>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
            <div>
                <button>0</button>
            </div>
    </div>
    <div>
        <button><i class="fas fa-ban fa-lg"></i></button>
        <button><i class="fas fa-play fa-lg"></i></button>
  </div>
</div>
);
