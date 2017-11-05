# Zigate Python Plugin
#
# Author: zaraki673
#
"""
<plugin key="Zigate" name="Zigate USB plugin" author="zaraki673" version="1.0.1" wikilink="http://www.domoticz.com/wiki/plugins/zigate.html" externallink="https://www.zigate.fr/">
	<params>
		<param field="SerialPort" label="Serial Port" width="150px" required="true" default="">
		</param>
		<param field="Mode6" label="Debug" width="75px">
			<options>
				<option label="True" value="Debug"/>
				<option label="False" value="Normal"  default="true" />
			</options>
		</param>
	</params>
</plugin>
"""
import Domoticz
import datetime


class BasePlugin:
	enabled = False
	lastHeartbeat = datetime.datetime.now()

	def __init__(self):
		#self.var = 123
		return

	def onStart(self):
		Domoticz.Log("onStart called")
		global ReqRcv
		global SerialConn
		if Parameters["Mode6"] == "Debug":
			Domoticz.Debugging(1)
			with open(Parameters["HomeFolder"]+"Debug.txt", "wt") as text_file:
				print("Started recording message for debug.", file=text_file)
		SerialConn = Domoticz.Connection(Name="ZiGate", Transport="Serial", Protocol="None", Address=Parameters["SerialPort"], Baud=115200)
		SerialConn.Connect()
		ReqRcv=''
		

	def onStop(self):
		Domoticz.Log("onStop called")

	def onConnect(self, Connection, Status, Description):
		Domoticz.Log("onConnect called")
		global isConnected
		if (Status == 0):
			isConnected = True
			Domoticz.Log("Connected successfully to: "+Parameters["SerialPort"])
			ZigateConf()
		else:
			Domoticz.Log("Failed to connect ("+str(Status)+") to: "+Parameters["SerialPort"])
			Domoticz.Debug("Failed to connect ("+str(Status)+") to: "+Parameters["SerialPort"]+" with error: "+Description)
		return True

	def onMessage(self, Connection, Data):
		Domoticz.Log("onMessage called")
		global Tmprcv
		global ReqRcv
		###########################################
		Tmprcv=Data.decode(errors='ignore')
		################## check if more than 1 sec between two message, if yes clear ReqRcv
		lastHeartbeatDelta = (datetime.datetime.now()-self.lastHeartbeat).total_seconds()
		if (lastHeartbeatDelta > 1):
			ReqRcv=''
			Domoticz.Debug("Last Message was "+str(lastHeartbeatDelta)+" seconds ago, Message clear")
		#Wait not end of data '\r'
		if Tmprcv.endswith('\r',0,len(Tmprcv))==False :
			ReqRcv+=Tmprcv
		else : # while end of data is receive
			ReqRcv+=Tmprcv
			ReqRcv=''
		self.lastHeartbeat = datetime.datetime.now()
		if Parameters["Mode6"] == "Debug":
			with open(Parameters["HomeFolder"]+"Debug.txt", "at") as text_file:
				print(ReqRcv, file=text_file)
		ReqRcv=""
		return

	def onCommand(self, Unit, Command, Level, Hue):
		Domoticz.Log("onCommand called for Unit " + str(Unit) + ": Parameter '" + str(Command) + "', Level: " + str(Level))

	def onNotification(self, Name, Subject, Text, Status, Priority, Sound, ImageFile):
		Domoticz.Log("Notification: " + Name + "," + Subject + "," + Text + "," + Status + "," + str(Priority) + "," + Sound + "," + ImageFile)

	def onDisconnect(self, Connection):
		Domoticz.Log("onDisconnect called")

	def onHeartbeat(self):
		Domoticz.Log("onHeartbeat called")
		if (SerialConn.Connected() != True):
			SerialConn.Connect()
		return True

global _plugin
_plugin = BasePlugin()

def onStart():
	global _plugin
	_plugin.onStart()

def onStop():
	global _plugin
	_plugin.onStop()

def onConnect(Connection, Status, Description):
	global _plugin
	_plugin.onConnect(Connection, Status, Description)

def onMessage(Connection, Data):
	global _plugin
	_plugin.onMessage(Connection, Data)

def onCommand(Unit, Command, Level, Hue):
	global _plugin
	_plugin.onCommand(Unit, Command, Level, Hue)

def onNotification(Name, Subject, Text, Status, Priority, Sound, ImageFile):
	global _plugin
	_plugin.onNotification(Name, Subject, Text, Status, Priority, Sound, ImageFile)

def onDisconnect(Connection):
	global _plugin
	_plugin.onDisconnect(Connection)

def onHeartbeat():
	global _plugin
	_plugin.onHeartbeat()

	# Generic helper functions
def DumpConfigToLog():
	for x in Parameters:
		if Parameters[x] != "":
			Domoticz.Debug( "'" + x + "':'" + str(Parameters[x]) + "'")
	Domoticz.Debug("Device count: " + str(len(Devices)))
	for x in Devices:
		Domoticz.Debug("Device:		   " + str(x) + " - " + str(Devices[x]))
		Domoticz.Debug("Device ID:	   '" + str(Devices[x].ID) + "'")
		Domoticz.Debug("Device Name:	 '" + Devices[x].Name + "'")
		Domoticz.Debug("Device nValue:	" + str(Devices[x].nValue))
		Domoticz.Debug("Device sValue:   '" + Devices[x].sValue + "'")
		Domoticz.Debug("Device LastLevel: " + str(Devices[x].LastLevel))
	return

def ZigateConf():
	################### ZiGate - get status ##################
	#lineinput="01021010021002101003".decode("hex") 
	#SerialConn.Send(lineinput)
	
	#01 02 10 49 02 10 02 14 B0 FF FC FE 02 10 03  > passer en mode discover devices
	
	
	################### ZiGate - set channel 11 ##################
	lineinput="!-"   # convertion de "01 02 10 21 02 10 02 14 2D 02 10 02 10 02 18 02 10 03 " en ascii (hexa>ascii) 
	SerialConn.Send(lineinput)

	################### ZiGate - Set Type COORDINATOR#################
	lineinput='#"'   ###"010210230210021122021003".decode("hex") 
	SerialConn.Send(lineinput)
	
	################### ZiGate - start network##################
	lineinput= '$$'   ##"01021024021002102403".decode("hex") 
	SerialConn.Send(lineinput)
