import * as React from 'react';

export default function CardTailwindResponsive() {
  return (
<div className="
grid 
sm:grid-cols-2
md:grid-cols-3 
lg:grid-cols-4 
xl:grid-cols-5 
2xl:grid-cols-6 
lg:bg-black
lg:text-white">
    <p>Tailwind Responsive</p>
    <p>text 2</p>
    <p>text 3</p>
    <p>text 4</p>
    <p>text 5</p>
    <p>text 6</p>
    <p>text 7</p>
</div>
)
}