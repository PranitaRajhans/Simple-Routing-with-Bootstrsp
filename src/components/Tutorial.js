function Tutorial() {
    return (

        <>
            <br /> <br />
            <h1> This is Tutorial Component !!</h1>
            <br /> <br />
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <div id="list-example" class="list-group">
                            <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                        </div>
                    </div>

                    <div class="col-sm-7 db">
                        <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
                            <h4 id="list-item-1">Item 1</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 4. Summer after high school when we first met. There is no fear now, let go and just be free, I will love you unconditionally. Sun-kissed skin so hot we'll melt your popsicle. This love will make you levitate.</p>
                            <h4 id="list-item-2">Item 2</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 4. Summer after high school when we first met. There is no fear now, let go and just be free, I will love you unconditionally. Sun-kissed skin so hot we'll melt your popsicle. This love will make you levitate.</p>
                            <h4 id="list-item-3">Item 3</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 4. Summer after high school when we first met. There is no fear now, let go and just be free, I will love you unconditionally. Sun-kissed skin so hot we'll melt your popsicle. This love will make you levitate.</p>
                            <h4 id="list-item-4">Item 4</h4>
                            <p>Placeholder content for the scrollspy list-group example. This one relates to item 4. Summer after high school when we first met. There is no fear now, let go and just be free, I will love you unconditionally. Sun-kissed skin so hot we'll melt your popsicle. This love will make you levitate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tutorial;