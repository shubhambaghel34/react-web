# React fundamentals 

# Parcel usage#

URL: https://parceljs.org/

1. Create Dev build
2. Create Local server
3. Relaoding page (Hot module replacement)
4. Caching which gives faster build
5. Image Optimization
6. Minified of js files
7. Bundling of js
8. Compressing of js
9. Content hashing
10. Code splitting
11. Differnetial bundling(support older version)
12. Diagnostics
13. HTTPs
14. Tree Shaking(remove unused code)
15. Different dev and prod build


# `NPM`
1. `npx parcel filename` -execute specific package on file
2. `npx parcel build filename`-create prod buidl and also need to remove entry point from App.js

# BroswerList usage#
URL: https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

# ReactHooks
1. useState--Re-render

2. React--> reconciliation Algo(ReactFiber) 

UI=> React creates V-DOM(represnetation of actual DOM) => Actual react elements(body)=>Object==> compares object of two DOM and update actual DOM

3. Shimmer UI

4. whenver changes in state variable, react will trigger reconciallation cycle

5. usEffect
 a.it will call whne every component is render if dpendency array is noot provided
 b.it will render once if we pass dependency array
 c.if dependency array has value then it will render only if that value changes  

6. React-Router
 a.createBrowserrouter is configration and RouterProvider is component imported/written by DOM which need to pass in render
   Ex. root.render(<RouterProvider router={appRouter}/>) where appRouter is configuration of different path with components
   as in createBrowserRouter([{path,element},{path,element}])
 b.`errorelement` in createBrowserrouter is utilize to define wildcard/random entry in path  
 c.Outlet is provided where all children can be push internally by react-DOM
 d.Link and with 'to' where it will  replace anchor tag  and refreshes the components
 e.Client Side Routing and Server Side Routing

7. Class COMPONENT LifeCycle

 a.CONSTRUCTOR->RENDER->ComponentDidmount

 b.CONSTRUCTOR (parent)->RENDER (parent)->Constructor(child)->Render(child)->ComponentDidmount(Child)->ComponentDidMount(Parent)

 c.Child and Parent components

  i.Render phase->Constructor->Render
 
  ii.Commit phase->Update DOM->componentDidMount 

8.Suspense/lazy
 a.Load component on demand and distrubute code  
 pass Fallaback value if needed
 b.dynamic import

9.Tailwindcss
 a.tailwind config
 b.postcss- will help to write/convert/transpile css in js



  <!-- <div className=" m-4 p-4 w-[350px] rounded-lg bg-slate-200">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h5>{cuisines.join(",")} </h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        {/* <h5>{deliveryTime} minutes</h5> */}
      </div> -->