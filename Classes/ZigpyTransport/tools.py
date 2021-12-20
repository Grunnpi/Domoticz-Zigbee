import Domoticz

def handle_thread_error(self, e, data=""):
    trace = []
    tb = e.__traceback__
    Domoticz.Error("Issue in request, dumping stack")
    Domoticz.Error("==>  %s" %data)
    Domoticz.Error("'%s' failed '%s'" % (tb.tb_frame.f_code.co_name, str(e)))
    while tb is not None:
        Domoticz.Error(
            "----> Line %s in '%s', function %s"
            % ( tb.tb_lineno, tb.tb_frame.f_code.co_filename, tb.tb_frame.f_code.co_name, ))
        tb = tb.tb_next

