
/**
 * AppLayout
 *  Header
 *    Logo
 *    NavItems
 *  Body
 *    Search
 *    RestaurantContainer
 *      RestaurantCard
 *        Image
 *        name
 *        star rating
 *        cuisines
 *        ETA
 *  Footer
 *    copyright
 *    links
 *    address
 *    contact
 */

 <!-- React Lifecycle Diagram -->
 <!-- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ -->
 <!-- 
    -Parent Constructor
    -Parent Render
        -Child 1 Constructor
        -Child 1 Render
        -Child n Constructor
        -Child n Render
        -- Render phase ends, diff calculated
        -Child 1 did mount
        -Child n did mount
        -- Commit Phase ends, diff patched to DOM
  -->