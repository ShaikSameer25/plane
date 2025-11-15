export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            VyomGarud is dedicated to developing state-of-the-art Unmanned
            Aerial Vehicle (UAV) systems that deliver unparalleled reliability
            and performance for defense, commercial, and governmental
            applications. We push the boundaries of autonomous technology to
            ensure mission success in the most demanding environments.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl text-left">
          <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl text-center">
            Drone System Workflow: From Planning to Actionable Intelligence
          </h3>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Our drone systems are engineered for a seamless and efficient workflow, ensuring that every mission is executed with precision from start to finish. This comprehensive process transforms complex operational requirements into actionable intelligence. The workflow is a cyclical process involving meticulous planning, robust execution, and in-depth analysis to guarantee mission success and continuous improvement.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-xl font-semibold">1. Mission Planning & Preparation</h4>
              <p className="mt-2 text-foreground/70">
                Every successful operation begins with detailed planning. Our ground control software allows operators to define mission parameters with high precision. This includes setting GPS waypoints for autonomous flight paths, defining areas of interest for surveillance, and configuring payload settings such as camera angles and sensor activation triggers. We conduct thorough pre-flight checks, including battery levels, payload calibration, and communication link verification, to ensure the UAV is in optimal condition for the mission ahead. Flight plans are simulated to identify potential risks and optimize the route for efficiency and safety.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">2. Deployment & Takeoff</h4>
              <p className="mt-2 text-foreground/70">
                VyomGarud UAVs are designed for rapid deployment. Depending on the model, takeoff can be initiated via vertical takeoff and landing (VTOL) capabilities or a short runway launch. The pre-flight checklist is finalized, and with a final systems-go confirmation, the drone is launched. The system's automated takeoff sequence ensures a smooth and stable ascent to the designated initial altitude, minimizing the potential for human error during this critical phase of flight.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">3. Autonomous Flight & Data Acquisition</h4>
              <p className="mt-2 text-foreground/70">
                Once airborne, the UAV executes the pre-programmed mission autonomously. Guided by our advanced flight control system, the drone navigates the specified waypoints, adjusting its course in real-time to account for wind and other environmental factors. Onboard AI and sensor fusion algorithms enable dynamic obstacle avoidance and navigation in GPS-denied environments. Throughout the flight, the high-resolution EO/IR sensors, LiDAR, or other payloads are actively collecting data, streaming it back to the ground control station via a secure, encrypted data link for real-time monitoring.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">4. Real-time Monitoring & Control</h4>
              <p className="mt-2 text-foreground/70">
                The ground control station serves as the central command hub. Operators can monitor the UAV’s status, view live video feeds, and track mission progress on a dynamic map. While the mission is autonomous, the operator always maintains the ability to intervene. They can manually override the flight path, retask the drone to a new objective, or adjust payload settings on the fly in response to evolving situations on the ground. This "human-in-the-loop" capability provides ultimate control and flexibility.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">5. Mission Completion & Recovery</h4>
              <p className="mt-2 text-foreground/70">
                Upon completion of its data acquisition tasks, the UAV autonomously initiates its return-to-base sequence. It navigates back to the pre-designated landing zone and performs a precise, automated landing. Our VTOL systems allow for recovery in confined spaces, while conventional models execute a gentle, controlled landing on a runway. The system is designed for minimal recovery time, allowing for rapid redeployment if necessary.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">6. Post-Flight Analysis & Intelligence Generation</h4>
              <p className="mt-2 text-foreground/70">
                The mission doesn't end when the drone lands. The collected data is offloaded and processed using our powerful analytics software. Photogrammetry and LiDAR data are stitched together to create detailed 3D terrain maps. Surveillance footage can be analyzed by AI algorithms to automatically detect, identify, and track objects or changes over time. The raw data is transformed into concise, actionable intelligence reports, providing decision-makers with the critical insights they need to act with confidence. This intelligence is then archived and can be used to inform future mission planning, completing the operational cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
